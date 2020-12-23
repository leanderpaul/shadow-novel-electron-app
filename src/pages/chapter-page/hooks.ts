import { useChapterDetailsLazyQuery } from '../../typescript/graphql.types';

export function useChapter() {
  const [loadChapter, { data, loading }] = useChapterDetailsLazyQuery();
  return { loading, chapter: data?.novel?.chapter, novelTitle: data?.novel?.title, loadChapter: (nid: string, cid: string) => loadChapter({ variables: { cid, nid } }) };
}
