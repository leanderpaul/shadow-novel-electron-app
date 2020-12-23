/**
 * Importing npm packages.
 */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Form, Modal, Input, Switch, Select } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { wordCounter } from './utils';
import { LocationState, useChapterConfirmation } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { ChapterInput } from '../../typescript/graphql.types';

interface ConfirmationModalProps {
  open: boolean;
  closeModal: () => void;
  chapter: ChapterInput;
  handleMatureContentChange: any;
}

function ConfirmationModal(props: ConfirmationModalProps) {
  const { state } = useLocation<LocationState>();
  const { handleSubmit, loading, volumes, setVid, vid } = useChapterConfirmation(state.nid, state.cid);
  const { chapter, closeModal, open, handleMatureContentChange } = props;

  return (
    <Modal centered title='Confirm Publishment' confirmLoading={loading} visible={open} onCancel={closeModal} okText='Confirm' onOk={() => handleSubmit(chapter)}>
      <Form labelCol={{ span: 6 }}>
        <Form.Item label='Novel title'>
          <Input bordered={false} value={state.title} readOnly />
        </Form.Item>
        <Form.Item label='Chapter Title'>
          <Input bordered={false} value={chapter.title} readOnly />
        </Form.Item>
        <Form.Item label='Volume'>
          <Select value={vid} onChange={(val) => setVid(val)} disabled={state.cid ? true : false}>
            {volumes.map((volume, index) => (
              <Select.Option value={volume.vid}>{`Volume ${index} ${volume.name ? `: ${volume.name}` : ''} `}</Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item label='Word Count'>
          <Input bordered={false} value={wordCounter(chapter.content)} readOnly />
        </Form.Item>
        <Form.Item label='Mature Content'>
          <Switch checked={chapter.matureContent} onChange={handleMatureContentChange} />
        </Form.Item>
      </Form>
    </Modal>
  );
}

export default ConfirmationModal;
