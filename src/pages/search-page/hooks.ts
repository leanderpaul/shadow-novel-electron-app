import { useNovelListLazyQuery, NovelSortBy, SortDirection } from '../../typescript/graphql.types';

export function useNovelList() {
  const [novelList, { data, loading }] = useNovelListLazyQuery();
  return {
    loadNovels: (query: string) => novelList({ variables: { filter: { title: query }, sort: { field: NovelSortBy.Title, order: SortDirection.Asc } } }),
    loading,
    novelList: data?.novels?.entries || [],
    page: (data?.novels?.offset || 0) / 20,
    totalCount: data?.novels?.totalCount || 0
  };
}
