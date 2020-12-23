/**
 * Importing npm packages.
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Button, Typography, Table } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

/**
 * Importing user defined components.
 */
import NovelCover from '../../components/novel-cover/NovelCover';

/**
 *  Importing user defined modules.
 */
import { useMyNovels } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { Novel, Chapter } from '../../typescript/graphql.types';
import { ColumnsType } from 'antd/lib/table';

type NovelInfo = Pick<Novel, 'nid' | 'cover' | 'title' | 'views'> & { chapters: { totalCount: number; entries: Pick<Chapter, 'cid' | 'index' | 'title'>[] } };

function Workspace() {
  const { loading, novels } = useMyNovels();
  const columns: ColumnsType<NovelInfo> = [
    {
      title: 'Cover',
      dataIndex: 'cover',
      render: (image: string, record: NovelInfo) => <NovelCover size='xs' image={image} alt={record.title} />,
      width: '100px'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      render: (title: string, record: NovelInfo) => (
        <Link to={`/novel/${record.nid}`}>
          <Typography.Title level={5}>{title}</Typography.Title>
        </Link>
      )
    },
    {
      title: 'Latest Chapter',
      dataIndex: 'chapters',
      width: '350px',
      render: (chapters: NovelInfo['chapters']) => <Typography.Text>{chapters.entries[0]?.title || '---'}</Typography.Text>
    },
    {
      title: 'Views',
      dataIndex: 'views',
      width: '100px',
      render: (views: number) => <Typography.Text>{views}</Typography.Text>
    },
    {
      title: 'Chapter Count',
      dataIndex: 'chapters',
      width: '200px',
      align: 'center',
      render: (chapters: NovelInfo['chapters']) => <Typography.Text>{chapters.totalCount}</Typography.Text>
    },
    {
      title: 'Operations',
      width: '150px',
      render: (_text, record) => (
        <Link to={`/workspace/${record.nid}`}>
          <Button className='w-100' type='primary'>
            Expolre
          </Button>
        </Link>
      )
    }
  ];

  return (
    <div className='m-4'>
      <div className='d-flex mb-4'>
        <Typography.Title className='ls-1' level={2}>
          My Novels
        </Typography.Title>
        <Link className='ml-auto' to='/workspace/new-novel'>
          <Button shape='round' icon={<PlusOutlined />} size='large' type='primary'>
            Create New Novel
          </Button>
        </Link>
      </div>
      <Table columns={columns} dataSource={novels} loading={loading} pagination={false} />
    </div>
  );
}

export default Workspace;
