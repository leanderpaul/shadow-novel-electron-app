import styled from 'styled-components';
import { Card } from 'antd';

import AuthBackground from '../../assets/img/auth-background.jpg';

export const AuthCard = styled(Card)`
  width: 500px;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: center / cover no-repeat url(${AuthBackground});
`;
