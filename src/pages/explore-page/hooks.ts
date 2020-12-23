import { NovelSortBy, SortDirection, GenreEnum, StatusEnum, useNovelListLazyQuery } from '../../typescript/graphql.types';

export interface Filter {
  genre?: GenreEnum;
  status?: StatusEnum;
  sortBy: keyof typeof sort;
}

export const sort = {
  popular: { field: NovelSortBy.Views, order: SortDirection.Desc },
  title: { field: NovelSortBy.Title, order: SortDirection.Asc },
  new: { field: NovelSortBy.CreatedAt, order: SortDirection.Desc },
  chapters: { field: NovelSortBy.ChapterCount, order: SortDirection.Desc }
};

export function useNovelList() {
  const [novelList, { data, loading }] = useNovelListLazyQuery();
  return {
    loadNovels: (filter: Filter) => novelList({ variables: { filter: { genre: filter.genre, status: filter.status }, sort: sort[filter.sortBy] } }),
    loading,
    novelList: data?.novels?.entries || [],
    page: (data?.novels?.offset || 0) / 20,
    totalCount: data?.novels?.totalCount || 0
  };
}
