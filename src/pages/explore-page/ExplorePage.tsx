/**
 * Importing npm packages.
 */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Typography, Space } from 'antd';

/**
 * Importing user defined components.
 */
import NovelCardList from '../../components/novel-card-list/NovelCardList';

/**
 *  Importing user defined modules.
 */
import { sort, useNovelList, Filter } from './hooks';

/**
 * Importing styled components.
 */
import { FiltersContainer, FilterButton } from './styles';

/**
 * Importing types.
 */
import { TextProps } from 'antd/lib/typography/Text';
import { TitleProps } from 'antd/lib/typography/Title';
import { StatusEnum, GenreEnum } from '../../typescript/graphql.types';

const activeAttr: TextProps = { strong: true, underline: true };
const defaultAttr: TextProps = { type: 'secondary' };
const titleAttr: TitleProps = { level: 5, className: 'mb-0' };
const getAttr = (a?: string, b?: string) => (a === b ? activeAttr : defaultAttr);

function ExplorePage() {
  const { state } = useLocation<Partial<Filter> | undefined>();
  const [filter, setFilter] = useState<Filter>({ sortBy: 'popular' });
  const { loadNovels, loading, novelList, page, totalCount } = useNovelList();

  useEffect(() => {
    loadNovels(filter);
  }, [filter]);

  useEffect(() => {
    if (state && (state.genre || state.status)) setFilter({ sortBy: 'popular', ...state });
  }, [state]);

  const handleClick = (key: keyof Filter, value: GenreEnum | StatusEnum | Filter['sortBy']) => () => setFilter({ ...filter, [key]: value });
  const handleAllClick = (key: keyof Filter) => () => {
    let obj = { ...filter };
    delete obj[key];
    setFilter(obj);
  };

  const genreFilters = Object.values(GenreEnum).map((genre) => (
    <div onClick={handleClick('genre', genre)}>
      <FilterButton {...getAttr(genre, filter.genre)}>{genre.split('_').join(' ').toLowerCase()}</FilterButton>
    </div>
  ));
  const statusFilters = Object.values(StatusEnum).map((status) => (
    <div onClick={handleClick('status', status)}>
      <FilterButton {...getAttr(status, filter.status)}>{status.split('_').join(' ').toLowerCase()}</FilterButton>
    </div>
  ));
  const sortByFilters = Object.keys(sort).map((sort) => (
    <div onClick={handleClick('sortBy', sort as Filter['sortBy'])}>
      <FilterButton {...getAttr(sort, filter.sortBy)}>{sort}</FilterButton>
    </div>
  ));

  return (
    <div className='mb-5 mt-4 mx-4'>
      <FiltersContainer>
        <div className='py-4 px-5 d-flex flex-column'>
          <Space size='large' className='mb-3'>
            <Typography.Title {...titleAttr}>Genre:</Typography.Title>
            <div onClick={handleAllClick('genre')}>
              <FilterButton {...getAttr(filter.genre)}>All</FilterButton>
            </div>
            {genreFilters}
          </Space>
          <Space size='large' className='my-3'>
            <Typography.Title {...titleAttr}>Status:</Typography.Title>
            <div onClick={handleAllClick('status')}>
              <FilterButton {...getAttr(filter.status)}>All</FilterButton>
            </div>
            {statusFilters}
          </Space>
          <Space size='large' className='my-3'>
            <Typography.Title {...titleAttr}>Sort by:</Typography.Title>
            {sortByFilters}
          </Space>
        </div>
      </FiltersContainer>
      <NovelCardList className='my-4' novels={novelList} type='horizontal' loading={loading} />
    </div>
  );
}

export default ExplorePage;
