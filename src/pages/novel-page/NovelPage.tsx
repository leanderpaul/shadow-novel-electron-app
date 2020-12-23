/**
 * Importing npm packages.
 */
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageNotFound from '../page-not-found/PageNotFound';

/**
 * Importing npm design components.
 */

/**
 * Importing user defined components.
 */
import NovelDescription from './NovelDescription';
import NovelSummary from './NovelSummary';

/**
 *  Importing user defined modules.
 */
import { useNovelDetails } from './hooks';

/**
 * Importing styled components.
 */
import { BackgroundImage } from './styles';

/**
 * Importing types.
 */
import { NovelParams } from '../../typescript/common';

function NovelPage() {
  const { novelID } = useParams<NovelParams>();
  const { loading, data, loadNovel } = useNovelDetails();

  useEffect(() => {
    loadNovel(novelID);
  }, [novelID]);

  return data?.novel === null ? (
    <PageNotFound />
  ) : (
    <div className='d-flex align-items-center flex-column position-relative'>
      <BackgroundImage cover={data?.novel?.cover} />
      <NovelSummary data={data} loading={loading} />
      <NovelDescription data={data} loading={loading} />
    </div>
  );
}

export default NovelPage;
