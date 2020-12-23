/**
 * Importing components from npm packages.
 */
import React from 'react';
import { Form, Input, Button } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { useLogin } from './hooks';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */

/**
 * Declaring constants.
 */
const formFotterLayout = {
  wrapperCol: { offset: 18, span: 6 }
};

function Login() {
  const { login, loading } = useLogin();

  return (
    <Form layout='vertical' onFinish={(values) => login(values.username, values.password)} requiredMark={false}>
      <Form.Item label='Username' name='username' rules={[{ required: true, message: 'Please input your username !' }]}>
        <Input />
      </Form.Item>
      <Form.Item label='Password' name='password' rules={[{ required: true, message: 'Please input your password !' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item className='mb-0 mt-3' {...formFotterLayout}>
        <Button block loading={loading} type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
