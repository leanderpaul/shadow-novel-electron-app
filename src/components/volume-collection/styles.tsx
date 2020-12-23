import styled from 'styled-components';

interface IChapterItemProps {
  backgroundColor: string;
  marginLeft: number;
  marginRight: number;
}

export const ChapterItem = styled.div<IChapterItemProps>`
  display: flex;
  padding: 8px;
  border-bottom: 1px solid #ccc;
  background-color: ${(props) => props.backgroundColor};
  margin-left: ${(props) => props.marginLeft}px;
  margin-right: ${(props) => props.marginRight}px;
`;
