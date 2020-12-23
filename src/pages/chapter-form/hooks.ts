import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { message } from 'antd';

import { useChapterInfoQuery, useCreateChapterMutation, useUpdateChapterMutation, useVolumeInfoQuery, ChapterInput } from '../../typescript/graphql.types';

export interface LocationState {
  nid: string;
  title: string;
  cid?: string;
}

export function useChapterConfirmation(nid: string, cid?: string) {
  const history = useHistory();
  const [vid, setVid] = useState<string>('');
  const { data } = useVolumeInfoQuery({ variables: { nid } });

  const [createChapter, { loading: creating }] = useCreateChapterMutation({
    onCompleted: (data) => {
      const result = data.createChapter!;
      if (result.__typename === 'Chapter') {
        message.success('Chapter created successfully !');
        history.push(`/workspace/${result.nid}`);
      } else message.error(result.message);
    }
  });

  const [updateChapter, { loading: updating }] = useUpdateChapterMutation({
    onCompleted: (data) => {
      const result = data.updateChapter!;
      if (result.__typename === 'Chapter') {
        message.success('Chapter updated successfully !');
        history.push(`/workspace/${result.nid}`);
      } else message.error(result.message);
    }
  });

  function handleSubmit(chapter: ChapterInput) {
    if (cid) updateChapter({ variables: { nid, cid, update: chapter } });
    else createChapter({ variables: { nid, vid, chapter } });
  }

  if (!vid && data?.novel?.volumes) setVid(data.novel.volumes[data.novel.volumes.length - 1].vid);

  return { loading: creating || updating, volumes: data?.novel?.volumes || [], handleSubmit, vid, setVid };
}

export function useChapterForm(nid: string, cid?: string) {
  const [chapter, setChapter] = useState<ChapterInput>({ title: '', content: '', matureContent: false });
  const { loading } = useChapterInfoQuery({
    variables: { nid, cid: cid! },
    skip: !cid,
    onCompleted: (data) => {
      if (data.novel?.chapter) {
        const obj: any = { ...data.novel.chapter };
        delete obj.cid;
        delete obj.__typename;
        setChapter(obj);
      }
    }
  });

  function handleChangeOf(field: keyof ChapterInput) {
    return function (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
      setChapter({ ...chapter, [field]: e.target.value });
    };
  }

  return { loading, chapter, handleChangeOf, toggleMatureContent: () => setChapter({ ...chapter, matureContent: !chapter.matureContent }) };
}
