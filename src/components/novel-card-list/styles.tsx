import styled from 'styled-components';
import { Skeleton } from 'antd';

import NovelCover from '../novel-cover/NovelCover';

export const HorizontalNovelCover = styled(NovelCover)`
  flex-shrink: 0;
`;

export const CardLoadingSkeleton = styled(Skeleton)`
  width: calc(100% - 180px);
`;
