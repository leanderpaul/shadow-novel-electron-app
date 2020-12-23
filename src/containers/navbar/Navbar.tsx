/**
 * Importing npm packages.
 */
import React, { useState } from 'react';

/**
 * Importing npm design components.
 */
import { Space, Divider } from 'antd';
import {
  AppstoreFilled,
  ClockCircleOutlined,
  CompassOutlined,
  EditFilled,
  HddOutlined,
  HomeOutlined,
  LineChartOutlined,
  LoginOutlined,
  LogoutOutlined,
  MenuOutlined,
  PoweroffOutlined,
  SearchOutlined,
  SettingFilled
} from '@ant-design/icons';

/**
 * Importing user defined components.
 */
import NavItem from './NavItem';

/**
 *  Importing user defined modules.
 */
import LogoImg from '../../assets/img/logo-pic.png';
import LogoDesc from '../../assets/img/logo-desc.png';
import { useAuth } from './hooks';

/**
 * Importing styled components.
 */
import { Container, LogoContainer, NavItemList } from './styles';

/**
 * Importing types.
 */

/**
 * Declaring constants.
 */

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { authenticated, logout } = useAuth();
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container className='transit' open={isOpen}>
      <LogoContainer>
        <Space direction='vertical' size='middle'>
          <img src={LogoImg} className='transit' width={isOpen ? 60 : 30} alt='Shadow Novel Logo' />
          <img src={LogoDesc} className='transit' width={isOpen ? 120 : 30} alt='Shadow Novel Text' />
          <MenuOutlined className='transit' style={{ fontSize: 18, transform: `rotateZ(${isOpen ? 0 : -90}deg)` }} onClick={toggle} />
        </Space>
      </LogoContainer>
      <Divider style={{ margin: '10px', width: 'auto', minWidth: 'auto' }} />
      <NavItemList>
        <NavItem Icon={HomeOutlined} title='Home' key='home' link='/' />
        <NavItem Icon={CompassOutlined} title='Explore' key='explore' link='/explore' />
        <NavItem Icon={LineChartOutlined} title='Ranking' key='ranking' link='/ranking' />
        <NavItem Icon={ClockCircleOutlined} title='Latest Updates' key='latest-updates' link='/latest-updates' />
        <NavItem Icon={SearchOutlined} title='Search' key='search' link='/search' />
      </NavItemList>
      <Divider style={{ margin: '10px', width: 'auto', minWidth: 'auto' }} />
      <NavItemList>
        <NavItem Icon={AppstoreFilled} title='Library' key='library' disabled={!authenticated} link='/library' />
        <NavItem Icon={EditFilled} title='Workspace' key='workspace' disabled={!authenticated} link='/workspace' />
        <NavItem Icon={SettingFilled} title='Settings' key='settings' link='/settings' />
        {authenticated ? <NavItem Icon={LogoutOutlined} title='Logout' key='logout' onClick={logout} /> : <NavItem Icon={LoginOutlined} title='Login' key='login' link='/auth' />}
      </NavItemList>
      <Divider style={{ margin: '10px', width: 'auto', minWidth: 'auto' }} />
      <NavItemList>
        <NavItem Icon={HddOutlined} title='Server Settings' />
        <NavItem Icon={PoweroffOutlined} title='Server State' />
      </NavItemList>
    </Container>
  );
}

export default Navbar;
