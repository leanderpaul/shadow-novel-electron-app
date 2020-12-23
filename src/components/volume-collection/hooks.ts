import { message } from 'antd';

import { useDeleteChapterMutation } from '../../typescript/graphql.types';

export function useDeleteChapter() {
  const [deleteChapter, { loading }] = useDeleteChapterMutation({
    onCompleted: (data) => {
      const result = data.deleteChapter!;
      if (result.__typename === 'Novel') message.success('Chapter deleted successfully !');
      else message.error(result.message);
    }
  });
  return { loading, handleDelete: (nid: string, cid: string) => deleteChapter({ variables: { nid, cid } }) };
}
