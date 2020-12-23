import { useNovelDetailsLazyQuery } from '../../typescript/graphql.types';

export function useNovelDetails() {
  const [loadNovel, { data, loading }] = useNovelDetailsLazyQuery();
  return { loadNovel: (nid: string) => loadNovel({ variables: { nid } }), data, loading };
}
