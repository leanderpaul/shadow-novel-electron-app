import { authState } from '../../graphql/index.graphql';
import { useMyNovelsQuery } from '../../typescript/graphql.types';

export function useMyNovels() {
  const { loading, data } = useMyNovelsQuery({ skip: authState().username === null });
  if (data?.user?.__typename === 'User') return { loading, novels: data.user.novels.entries! };
  return { loading, novels: [] };
}
