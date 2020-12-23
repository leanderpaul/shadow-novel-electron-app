/**
 * Importing npm packages.
 */
import React from 'react';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';
import { AutoSizer, List as VList } from 'react-virtualized';

/**
 * Importing npm design components.
 */
import { Empty, List, Button, Popconfirm } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { useDeleteChapter } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { NovelParams, ChapterInfo } from '../../typescript/common';

interface IVirtualListProps {
  chapters: ChapterInfo[];
  height?: number;
  title: string;
}

function VolumeList(props: IVirtualListProps) {
  const { novelID } = useParams<NovelParams>();
  const { handleDelete, loading } = useDeleteChapter();

  return props.chapters.length === 0 ? (
    <Empty />
  ) : (
    <AutoSizer disableHeight>
      {(autoSizerProps) => (
        <List>
          <VList
            autoHeight
            style={{ scrollbarWidth: 'thin' }}
            height={600}
            rowCount={props.chapters.length}
            rowHeight={65}
            width={autoSizerProps.width}
            rowRenderer={(rowProps) => {
              const chapter = props.chapters[rowProps.index];
              const chapterActions = [
                <Link to={{ pathname: `/workspace/${novelID}/chapter`, state: { nid: novelID, title: props.title, cid: chapter.cid } }}>Edit</Link>,
                <Popconfirm onConfirm={() => handleDelete(novelID, chapter.cid)} placement='bottom' title='Are you sure?' okText='Confirm' cancelText='Cancel'>
                  <Button type='text' danger>
                    Delete
                  </Button>
                </Popconfirm>
              ];
              const createdTime = moment(chapter.createdAt).format('MMMM Do YYYY, h:mm:ss a');
              return (
                <List.Item className='py-2' key={chapter.cid} style={rowProps.style} actions={chapterActions}>
                  <List.Item.Meta avatar={chapter.index} title={chapter.title} description={createdTime} />
                </List.Item>
              );
            }}
          />
        </List>
      )}
    </AutoSizer>
  );
}

export default VolumeList;
