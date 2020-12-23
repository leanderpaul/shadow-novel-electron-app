/**
 * Importing npm packages.
 */
import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Button, Card, Dropdown, Menu, Space, Typography } from 'antd';
import { DownOutlined, SettingFilled } from '@ant-design/icons';

/**
 * Importing user defined components.
 */
import VolumeCollection from '../../components/volume-collection/VolumeCollection';

/**
 *  Importing user defined modules.
 */
import { volumeFormState } from '../../graphql/index.graphql';
import { useNovelDetails } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { NovelParams } from '../../typescript/common';
import VolumeForm from '../../containers/volume-form/VolumeForm';

function NovelDashboard() {
  const { novelID } = useParams<NovelParams>();
  const { loading, novel } = useNovelDetails(novelID);

  const cardTitle = (
    <Typography.Title className='mb-0' level={3}>
      {novel?.title}
    </Typography.Title>
  );
  const createMenu = (
    <Menu>
      <Menu.Item onClick={() => volumeFormState({ open: true })}>New Volume</Menu.Item>
      <Menu.Item>
        <Link to={{ pathname: `/workspace/${novelID}/chapter`, state: { nid: novelID, title: novel?.title } }}>New Chapter</Link>
      </Menu.Item>
    </Menu>
  );
  const cardExtras = (
    <Space size='middle'>
      <Link to={`/workspace/edit-novel?novel=${novelID}`}>
        <Button type='primary' size='large' icon={<SettingFilled />}></Button>
      </Link>
      <Dropdown overlay={createMenu}>
        <Button className='text-uppercase ls-1' size='large' type='primary'>
          Create <DownOutlined />
        </Button>
      </Dropdown>
    </Space>
  );

  return (
    <div className='m-4'>
      <VolumeForm />
      <Card loading={loading} title={cardTitle} extra={cardExtras}>
        <VolumeCollection title={novel?.title || ''} type='list' volumes={novel?.volumes || []} />
      </Card>
    </div>
  );
}

export default NovelDashboard;
