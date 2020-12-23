import { Card } from 'antd';
import styled from 'styled-components';

interface IBackgroundImageProps {
  cover?: string | null;
}

export const BackgroundImage = styled.div<IBackgroundImageProps>`
  position: absolute;
  z-index: -1;
  background: ${(props) => (props.cover ? `url(${props.cover})` : 'none')};
  background-position: center;
  background-size: 100%;
  filter: blur(20px) brightness(0.5);
  height: 400px;
  width: 100%;
`;

export const NovelSummaryContainer = styled.div`
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NovelInfo = styled.div`
  width: 750px;
  height: 300px;
  z-index: 1;
  margin: 0px 50px;
  display: flex;
  flex-direction: column;
  button {
    width: 200px;
  }
  span {
    font-weight: 600;
  }
`;

export const NovelDescriptionCard = styled(Card)`
  width: 1075px;
  margin-bottom: 50px;
`;

export const LastChapterContainer = styled.div`
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid black;
`;
