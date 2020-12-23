/**
 * Importing npm packages.
 */
import React, { useState } from 'react';

/**
 * Importing npm design components.
 */
import { Card, Typography, Form, Row, Col, Select, Input, Button } from 'antd';

/**
 * Importing user defined components.
 */
import NovelCover from '../../components/novel-cover/NovelCover';

/**
 *  Importing user defined modules.
 */
import { useNovelForm } from './hooks';
import { getGenres, getTags } from '../../utils/data.utils';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
interface IUserNovelPage {
  type: 'new' | 'edit';
}

/**
 * Constants.
 */
const genres = getGenres();
const tags = getTags();

function covertToBase64(files: FileList, callback: (img: string) => void) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result!.toString()));
  reader.readAsDataURL(files[0]);
}

function NovelForm(props: IUserNovelPage) {
  const [novelCover, setNovelCover] = useState<string | null>(null);
  const { handleSubmit, loading, novel } = useNovelForm(props.type);

  if (props.type === 'edit' && novelCover === null && novel?.cover) setNovelCover(novel.cover);
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => covertToBase64(e.target.files!, (base64String) => setNovelCover(base64String));
  const title = (
    <Typography.Title className='mb-0' level={3}>
      {props.type === 'new' ? 'New Novel' : 'Edit Novel'}
    </Typography.Title>
  );

  return (
    <div className='m-5 px-5 py-3'>
      <Card loading={loading || novel === null} title={title}>
        <Form labelCol={{ span: 4 }} wrapperCol={{ span: 20 }} initialValues={novel} onFinish={(values) => handleSubmit({ ...values, cover: novelCover })}>
          <Row>
            <Col span={16}>
              <Form.Item label='Title' name='title' hasFeedback rules={[{ required: true, min: 3, max: 32, message: 'Novel Title is invalid !' }]}>
                <Input />
              </Form.Item>
              <Form.Item label='Genre' name='genre' hasFeedback rules={[{ required: true, message: 'Please select a genre !' }]}>
                <Select>
                  {genres.map((genre) => (
                    <Select.Option value={genre.key}>{genre.value}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label='Status' name='status' hasFeedback rules={[{ required: true, message: 'Please select the novel status !' }]}>
                <Select>
                  <Select.Option value='ONGOING'>Ongoing</Select.Option>
                  <Select.Option value='COMPLETED'>Completed</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label='Tags' name='tags' hasFeedback>
                <Select mode='multiple'>
                  {tags.map((tag) => (
                    <Select.Option value={tag.key}>{tag.value}</Select.Option>
                  ))}
                </Select>
              </Form.Item>
              <Form.Item label='Description' name='desc' hasFeedback rules={[{ required: true, min: 3, max: 1000, message: 'Novel description is invalid !' }]}>
                <Input.TextArea showCount maxLength={1000} minLength={3} rows={10} />
              </Form.Item>
            </Col>
            <Col className='text-center' span={8}>
              <input hidden type='file' name='cover' id='cover' onChange={handleFileChange} />
              <label htmlFor='cover'>
                <NovelCover size='xl' image={novelCover} className='mt-3 pointer' />
              </label>
            </Col>
          </Row>
          <div className='w-100 text-right'>
            <Button htmlType='submit' shape='round' loading={loading} size='large' type='primary'>
              {props.type === 'new' ? 'Create Novel' : 'Update Novel'}
            </Button>
          </div>
        </Form>
      </Card>
    </div>
  );
}

export default NovelForm;
