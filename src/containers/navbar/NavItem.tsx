/**
 * Importing npm packages.
 */
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Tooltip } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */

/**
 * Importing styled components.
 */
import { NavItemConatiner } from './styles';

/**
 * Importing types.
 */
interface NavItemProps {
  Icon: React.ForwardRefExoticComponent<any>;
  title: string;
  link?: string;
  disabled?: boolean;
  onClick?: () => void;
}

function NavItem(props: NavItemProps) {
  const { Icon, title, link, disabled, onClick } = props;
  const { pathname } = useLocation();

  return (
    <Link to={link || '#'} onClick={onClick}>
      <Tooltip placement='right' title={title}>
        <NavItemConatiner disabled={disabled} active={pathname === link}>
          <span className='icon'>
            <Icon />
          </span>
          <span>{title}</span>
        </NavItemConatiner>
      </Tooltip>
    </Link>
  );
}

export default NavItem;
