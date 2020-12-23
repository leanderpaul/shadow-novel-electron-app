/**
 * Importing components from npm packages.
 */
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Typography } from 'antd';

/**
 * Importing user defined components.
 */
import Login from './Login';
import Register from './Register';

/**
 *  Importing user defined modules.
 */
import { useAuth } from './hooks';

/**
 * Importing styled components.
 */
import { AuthCard, Container } from './styles';

/**
 * Importing types.
 */
import { CardTabListType } from 'antd/lib/card';

type ITab = 'login' | 'register';

const tabs: CardTabListType[] = [
  {
    key: 'login',
    tab: (
      <Typography.Title className='px-4 mb-0 text-uppercase ls-1' level={4}>
        Login
      </Typography.Title>
    )
  },
  {
    key: 'register',
    tab: (
      <Typography.Title className='px-4 mb-0 text-uppercase ls-1' level={4}>
        Register
      </Typography.Title>
    )
  }
];

function AuthPage() {
  const [tab, setTab] = useState<ITab>('login');
  const { authenticated } = useAuth();

  return authenticated ? (
    <Redirect to='/' />
  ) : (
    <Container>
      <AuthCard tabList={tabs} activeTabKey={tab} onTabChange={(key) => setTab(key as ITab)} tabProps={{ centered: true }}>
        {tab === 'login' ? <Login /> : <Register />}
      </AuthCard>
    </Container>
  );
}

export default AuthPage;
