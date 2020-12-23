/**
 * Importing npm packages.
 */
import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Card, Typography, Row, Col } from 'antd';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@ant-design/icons';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { useChapter } from './hooks';

/**
 * Importing styled components.
 */
import { NavButton } from './styles';

/**
 * Importing types.
 */
import { ChapterParams } from '../../typescript/common';

function ChapterPage() {
  const history = useHistory();
  const { chapterID, novelID } = useParams<ChapterParams>();
  const { chapter, loadChapter, loading, novelTitle } = useChapter();

  useEffect(() => {
    loadChapter(novelID, chapterID);
  }, [novelID, chapterID]);

  const title = (
    <div style={{ margin: '-16px 0px' }}>
      <Row gutter={0}>
        <Col span={2}>
          <NavButton type='text' icon={<ArrowLeftOutlined style={{ fontSize: 30, fontWeight: 'bold' }} />}></NavButton>
        </Col>
        <Col span={20} className='text-center'>
          <Typography.Title className='my-2 pointer' level={3}>
            <span onClick={() => history.push(`/novel/${novelID}`)}>{novelTitle}</span>
          </Typography.Title>
        </Col>
        <Col span={2}>
          <NavButton type='text' icon={<ArrowRightOutlined style={{ fontSize: 30, fontWeight: 'bold' }} />}></NavButton>
        </Col>
      </Row>
    </div>
  );
  const content = chapter?.content.split('\n').map((para) => <Typography.Paragraph>{para}</Typography.Paragraph>);

  return (
    <div className='m-5'>
      <Card headStyle={{ padding: 0 }} title={title} loading={loading} actions={[title]}>
        <Typography.Title className='mb-4' level={4}>{`Chapter ${chapter?.index}: ${chapter?.title}`}</Typography.Title>
        <div>{content}</div>
      </Card>
    </div>
  );
}

export default ChapterPage;
