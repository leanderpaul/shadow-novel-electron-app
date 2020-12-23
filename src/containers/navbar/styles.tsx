import styled from 'styled-components';

interface NavState {
  open: boolean;
}

interface NavItemState {
  active: boolean;
  disabled?: boolean;
}

export const Container = styled.div<NavState>`
  width: ${(props) => (props.open ? '250px' : '55px')};
  background-color: #1f1f1f;
  padding: 20px 0px;
  overflow: hidden;
  flex-shrink: 0;
`;

export const LogoContainer = styled.div`
  text-align: center;
  margin: 15px 15px 20px 15px;
`;

export const NavItemConatiner = styled.li<NavItemState>`
  font-size: 16px;
  cursor: ${({ disabled }) => (disabled ? 'auto' : 'pointer')};
  padding: 10px 20px;
  /* width: 250px; */
  white-space: nowrap;
  color: ${(props) => (props.disabled ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.65)')};
  ${(props) => (props.active ? `border-left: 2px solid #1890ff;background-color: rgba(255, 255, 255, 0.05);color: #fff;` : '')}

  ${({ disabled }) =>
    !disabled &&
    `
    &:hover {
      color: #fff;
      background-color: rgba(255, 255, 255, 0.05);
    }
  `}

  .icon {
    margin-right: 20px;
  }
`;

export const NavItemList = styled.ul`
  list-style-type: none;
  padding: 0px;
`;
