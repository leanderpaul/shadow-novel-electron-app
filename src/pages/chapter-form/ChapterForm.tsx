/**
 * Importing npm packages.
 */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Button, Card, Form, Input, PageHeader, Result, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { useChapterForm, LocationState } from './hooks';

/**
 * Importing styled components.
 */
import { TitleInput } from './styles';
import ConfirmationModal from './ConfirmationModal';

/**
 * Importing types.
 */
interface ChapterFormProps {
  type: 'new' | 'edit';
}

function ChapterForm(props: ChapterFormProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { state } = useLocation<LocationState>();
  const { chapter, handleChangeOf, loading, toggleMatureContent } = useChapterForm(state.nid, state.cid);

  const titleInput = <TitleInput bordered={false} placeholder='Title' value={chapter.title} onChange={handleChangeOf('title')} />;
  const publishButton = (
    <Button type='primary' icon={<CheckOutlined />} disabled={!chapter.title || !chapter.content} onClick={() => setIsOpen(true)}>
      Publish
    </Button>
  );

  return state ? (
    <div>
      <ConfirmationModal chapter={chapter} closeModal={() => setIsOpen(false)} handleMatureContentChange={toggleMatureContent} open={isOpen} />
      <PageHeader onBack={() => window.history.back()} ghost={false} title={state.title} extra={[publishButton]} />
      <div className='m-5'>
        <Card loading={loading} title={titleInput}>
          <Input.TextArea bordered={false} placeholder='Content goes here !' autoSize={{ minRows: 15, maxRows: 22 }} value={chapter.content} onChange={handleChangeOf('content')} />
        </Card>
      </div>
    </div>
  ) : (
    <Result status='warning' title='An unecpected problem has occurred  !' extra={<Button type='primary'>Go to Novel Dashboard</Button>} />
  );
}

export default ChapterForm;
