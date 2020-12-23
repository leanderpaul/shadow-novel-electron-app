import styled from 'styled-components';
import { Typography } from 'antd';

export const FiltersContainer = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  width: 100%;
  text-transform: capitalize;
`;

export const FilterButton = styled(Typography.Text)`
  cursor: pointer;

  &:hover {
    text-decoration: underline;
    color: #eee;
  }
`;
