/**
 * Importing npm packages.
 */
import React, { useEffect, useState } from 'react';

/**
 * Importing npm design components.
 */
import { Input } from 'antd';

/**
 * Importing user defined components.
 */
import NovelCardList from '../../components/novel-card-list/NovelCardList';

/**
 *  Importing user defined modules.
 */
import { useNovelList } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */

function SearchPage() {
  const [query, setQuery] = useState<string>('');
  const { loadNovels, loading, novelList, page, totalCount } = useNovelList();

  useEffect(() => {
    loadNovels(query);
  }, [query]);

  return (
    <div className='m-4'>
      <div className='m-5'>
        <Input.Search size='large' enterButton='Search' loading={loading} allowClear placeholder='Enter novel title to search' value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
      <NovelCardList className='my-4' novels={novelList} type='horizontal' loading={loading} />
    </div>
  );
}

export default SearchPage;
