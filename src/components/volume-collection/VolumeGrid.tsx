/**
 * Importing npm packages.
 */
import React from 'react';
import moment from 'moment';
import { useParams, Link } from 'react-router-dom';
import { AutoSizer, Grid } from 'react-virtualized';

/**
 * Importing npm design components.
 */
import { Typography } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */

/**
 * Importing styled components.
 */
import { ChapterItem } from './styles';

/**
 * Importing types.
 */
import { ChapterInfo, NovelParams } from '../../typescript/common';

interface IVirtualGridProps {
  cols: number;
  chapters: ChapterInfo[];
  height?: number;
}

/**
 * Constants.
 */
const backgroundColors = ['#141414', '#1a1a1a'];

function VolumeGrid(props: IVirtualGridProps) {
  const { novelID } = useParams<NovelParams>();

  return (
    <AutoSizer disableHeight>
      {(autoSizerProps) => (
        <Grid
          autoHeight
          style={{ scrollbarWidth: 'thin' }}
          columnCount={props.cols}
          rowCount={Math.ceil(props.chapters.length / props.cols)}
          columnWidth={autoSizerProps.width / props.cols - 8}
          rowHeight={70}
          width={autoSizerProps.width}
          height={props.height || 600}
          cellRenderer={(gridProps) => {
            const index = gridProps.rowIndex * props.cols + gridProps.columnIndex;
            console.log(index);
            const chapter = props.chapters[index];
            if (!chapter) return null;
            const obj = {
              backgroundColor: backgroundColors[(gridProps.rowIndex + gridProps.columnIndex) % 2],
              marginLeft: gridProps.columnIndex === props.cols - 1 ? 8 : 4,
              marginRight: gridProps.columnIndex === 0 ? 8 : 4
            };
            return (
              <Link to={`/novel/${novelID}/${chapter.cid}`} key={gridProps.key} style={gridProps.style}>
                <ChapterItem {...obj}>
                  <div className='mr-3'>
                    <Typography.Text>{chapter.index}</Typography.Text>
                  </div>
                  <div>
                    <Typography.Paragraph className='mb-2' style={{ width: autoSizerProps.width / props.cols - 60 }} ellipsis>
                      {chapter.title}
                    </Typography.Paragraph>
                    <Typography.Text type='secondary'>{moment(chapter.createdAt).fromNow()}</Typography.Text>
                  </div>
                </ChapterItem>
              </Link>
            );
          }}
        />
      )}
    </AutoSizer>
  );
}

export default VolumeGrid;
