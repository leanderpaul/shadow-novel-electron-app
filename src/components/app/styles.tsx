import styled from 'styled-components';

export const Layout = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
`;

export const Content = styled.div`
  height: 100vh;
  flex-grow: 1;
  overflow-y: auto;
  scrollbar-width: thin;
`;
