/**
 * Importing npm packages.
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Button, Skeleton, Space, Typography } from 'antd';
import { BookFilled, BarsOutlined, ClockCircleOutlined, PlusOutlined } from '@ant-design/icons';

/**
 * Importing user defined components.
 */
import NovelCover from '../../components/novel-cover/NovelCover';

/**
 *  Importing user defined modules.
 */
import { getGenreValue, getFirstChapterInVolume } from '../../utils/data.utils';

/**
 * Importing styled components.
 */
import { NovelInfo, NovelSummaryContainer } from './styles';
import { NovelDetailsQueryResult } from '../../typescript/graphql.types';

/**
 * Importing types.
 */
interface INovelSummary {
  loading: boolean;
  data: NovelDetailsQueryResult['data'];
}

function NovelSummary(props: INovelSummary) {
  const novel = props.data?.novel;
  const firstChapter = novel ? getFirstChapterInVolume(novel.volumes) : null;

  return (
    <NovelSummaryContainer>
      <NovelCover image={novel?.cover || undefined} size='lg' alt={novel?.title} />
      <NovelInfo>
        {props.loading ? (
          <Skeleton active={true} paragraph={{ rows: 5 }} />
        ) : (
          <React.Fragment>
            <Typography.Title>{novel?.title}</Typography.Title>
            <Space>
              <Typography.Text className='mr-3'>
                <BookFilled className='mr-2' />
                {novel && getGenreValue(novel.genre)}
              </Typography.Text>
              <Typography.Text className='mr-3'>
                <BarsOutlined className='mr-2' />
                {novel?.chapters.totalCount} Chapters
              </Typography.Text>
              <Typography.Text className='mr-3 text-capitalize'>
                <ClockCircleOutlined className='mr-2' />
                {novel?.status.toLocaleLowerCase()}
              </Typography.Text>
            </Space>
            <Space className='mt-4'>
              <Typography.Text type='secondary'>Author: </Typography.Text>
              <Typography.Text>{novel?.author}</Typography.Text>
            </Space>
            <Space size='large' className='mt-auto mb-1'>
              <Link to={`/novel/${novel?.nid}/${firstChapter?.cid}`}>
                <Button disabled={firstChapter ? false : true} type='primary' size='large' shape='round'>
                  Read
                </Button>
              </Link>
              <Button icon={<PlusOutlined />} size='large' shape='round'>
                Add to library
              </Button>
            </Space>
          </React.Fragment>
        )}
      </NovelInfo>
    </NovelSummaryContainer>
  );
}

NovelSummary.defaultProps = {
  title: ''
};

export default NovelSummary;
