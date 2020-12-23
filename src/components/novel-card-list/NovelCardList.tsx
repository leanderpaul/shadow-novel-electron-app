/**
 * Importing npm packages.
 */
import React from 'react';

/**
 * Importing npm design components.
 */
import { Empty, Row, Typography } from 'antd';

/**
 * Importing user defined components.
 */
import HorizonatlNovelCard from './HorizontalNovelCard';
import VerticalNovelCard from './VerticalNovelCard';

/**
 *  Importing user defined modules.
 */

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
import { NovelBriefFragmentFragment } from '../../typescript/graphql.types';

interface NovelCardListProps {
  type: 'vertical' | 'horizontal';
  cardCount: number;
  loading: boolean;
  className?: string;
  title?: string | React.ReactNode;
  novels: NovelBriefFragmentFragment[];
}

/**
 * Constants
 */
const Cards = { horizontal: HorizonatlNovelCard, vertical: VerticalNovelCard };

function NovelCardList(props: NovelCardListProps) {
  const Card = Cards[props.type];
  const novelCards = props.novels.map((novel) => <Card {...novel} />);
  const tempCards = props.loading ? Array(props.cardCount).fill(<Card loading={true} />) : [];

  return (
    <div className={props.className}>
      {props.title ? typeof props.title === 'string' ? <Typography.Title level={3}>{props.title}</Typography.Title> : props.title : null}
      <Row gutter={props.type === 'horizontal' ? [20, 20] : 24}>{props.loading ? tempCards : novelCards.length > 0 ? novelCards : <Empty className='w-100 my-5' />}</Row>
    </div>
  );
}

NovelCardList.defaultProps = {
  loading: false,
  cardCount: 6
};

export default NovelCardList;
