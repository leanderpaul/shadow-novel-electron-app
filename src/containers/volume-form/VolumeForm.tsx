/**
 * Importing npm packages.
 */
import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Button, Form, Input, Modal } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { volumeFormState } from '../../graphql/index.graphql';
import { useNovelForm } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { NovelParams } from '../../typescript/common';

function VolumeForm() {
  const { novelID } = useParams<NovelParams>();
  const { handleSubmit, loading, open, isNew, name } = useNovelForm();
  const [form] = Form.useForm();

  const onSubmit = () => handleSubmit(novelID, form.getFieldValue('name'));
  const title = isNew ? 'Create Volume' : 'Edit Volume';
  const footer = [
    <Button key='volume-cancel' type='primary' onClick={() => volumeFormState({ open: false })} danger>
      Cancel
    </Button>,
    <Button key='volume-ok' type='primary' onClick={onSubmit} loading={loading}>
      {isNew ? 'Create' : 'Update'}
    </Button>
  ];

  return (
    <Modal visible={open} footer={footer} onCancel={() => volumeFormState({ open: false })} title={title} centered>
      <Form form={form} layout='vertical'>
        <Form.Item name='name' label='Volume Name'>
          <Input placeholder='Volume Name' defaultValue={name || ''} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default VolumeForm;
