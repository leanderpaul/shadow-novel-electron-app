import { useNovelDetailsQuery } from '../../typescript/graphql.types';

export function useNovelDetails(nid: string) {
  const { loading, data } = useNovelDetailsQuery({ variables: { nid } });
  return { loading, novel: data?.novel };
}
