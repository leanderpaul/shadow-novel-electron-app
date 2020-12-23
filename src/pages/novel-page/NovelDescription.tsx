/**
 * Importing npm packages.
 */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

/**
 * Importing npm design components.
 */
import { Empty, Tag, Typography } from 'antd';

/**
 * Importing user defined components.
 */
import VolumeCollection from '../../components/volume-collection/VolumeCollection';

/**
 *  Importing user defined modules.
 */
import { getLastChapterInVolume, getTagValue } from '../../utils/data.utils';

/**
 * Importing styled components.
 */
import { NovelDescriptionCard, LastChapterContainer } from './styles';

/**
 * Importing types.
 */
import { CardTabListType } from 'antd/lib/card';
import { NovelDetailsQueryResult } from '../../typescript/graphql.types';

interface INovelDescription {
  loading: boolean;
  data: NovelDetailsQueryResult['data'];
}

/**
 * Constants.
 */
const tablist: CardTabListType[] = [
  {
    key: 'about',
    tab: (
      <Typography.Title className='mb-0 px-3' level={3}>
        About
      </Typography.Title>
    )
  },
  {
    key: 'chapters',
    tab: (
      <Typography.Title className='mb-0 px-3' level={3}>
        Table of Contents
      </Typography.Title>
    )
  }
];

function NovelDescription(props: INovelDescription) {
  const [tab, setTab] = useState<'about' | 'chapters'>('about');
  const toggleTab = () => setTab(tab === 'about' ? 'chapters' : 'about');

  const novel = props.data?.novel;
  const lastChapter = novel ? getLastChapterInVolume(novel.volumes) : null;

  return (
    <NovelDescriptionCard tabList={tablist} activeTabKey={tab} onTabChange={toggleTab} loading={props.loading}>
      {tab === 'about' ? (
        <div>
          <Typography.Title level={4}>Synopsis</Typography.Title>
          {novel?.desc.split('\n').map((para) => (
            <Typography.Paragraph>{para}</Typography.Paragraph>
          ))}
          <Typography.Title level={4}>Tags</Typography.Title>
          {novel?.tags.map((tag) => (
            <Tag className='m-1'>{getTagValue(tag)}</Tag>
          ))}
        </div>
      ) : novel!.chapters.totalCount > 0 ? (
        <div>
          <LastChapterContainer>
            <Typography.Text className='mr-3'>Latest Chapter:</Typography.Text>
            <Link to={`/novel/${novel?.nid}/${lastChapter?.cid}`} component={Typography.Link}>
              {`Chapter ${lastChapter?.index}: ${lastChapter?.title}`}
            </Link>
            <Typography.Text className='ml-3' type='secondary'>
              {moment(lastChapter!.createdAt).fromNow()}
            </Typography.Text>
          </LastChapterContainer>
          <VolumeCollection type='grid' cols={2} volumes={novel!.volumes} removeEmpty />
        </div>
      ) : (
        <Empty />
      )}
    </NovelDescriptionCard>
  );
}

export default NovelDescription;
