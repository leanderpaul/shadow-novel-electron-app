import { useHistory, useLocation } from 'react-router-dom';
import { message } from 'antd';

import { useCreateNovelMutation, NovelInput, useNovelInfoQuery, useUpdateNovelMutation } from '../../typescript/graphql.types';

const INITIAL_VALUE = { cover: null, title: '', desc: '', genre: '', status: 'ONGOING', tags: [] };

function useNewNovel() {
  const history = useHistory();
  const [createNovel, { loading }] = useCreateNovelMutation({
    onCompleted: (data) => {
      const result = data.createNovel!;
      if (result.__typename === 'Novel') {
        message.success('Novel created successfully !');
        history.push(`/workspace/${result.nid}`);
      } else message.error(result.message);
    }
  });
  return { handleSubmit: (novel: NovelInput) => createNovel({ variables: { novel } }), loading, novel: INITIAL_VALUE };
}

function useEditNovel() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const nid = query.get('novel');
  const history = useHistory();
  const { data } = useNovelInfoQuery({ variables: { nid: nid! }, skip: !nid });
  const [updateNovel, { loading }] = useUpdateNovelMutation({
    onCompleted: (data) => {
      const result = data.updateNovel!;
      if (result.__typename === 'Novel') {
        message.success('Novel updated successfully !');
        history.push(`/workspace/${result.nid}`);
      } else message.error(result.message);
    }
  });
  const novel: any = data ? { ...data.novel } : null;
  if (novel) delete novel.__typename;
  return { handleSubmit: (novel: NovelInput) => updateNovel({ variables: { nid: nid!, update: novel } }), loading, novel };
}

export function useNovelForm(type: 'edit' | 'new') {
  const newNovel = useNewNovel();
  const editNovel = useEditNovel();
  return type === 'new' ? newNovel : editNovel;
}
