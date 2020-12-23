/**
 * Importing npm packages.
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Col, Card, Typography } from 'antd';

/**
 * Importing user defined components.
 */
import NovelCover from '../novel-cover/NovelCover';

/**
 *  Importing user defined modules.
 */
import { getGenreValue } from '../../utils/data.utils';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
interface IVerticalNovelCard {
  loading: boolean;
  nid: string;
  cover?: string | null;
  title: string;
  genre: string;
}

function VerticalNovelCard(props: IVerticalNovelCard) {
  return (
    <Col span={4}>
      <Link to={`/novel/${props.nid}`}>
        <Card hoverable loading={props.loading} cover={<NovelCover image={props.cover} alt={props.title} />}>
          <Card.Meta
            title={props.title}
            description={
              <Link to={'/browse/' + getGenreValue(props.genre)}>
                <Typography.Text ellipsis type='secondary'>
                  {getGenreValue(props.genre)}
                </Typography.Text>
              </Link>
            }
          />
        </Card>
      </Link>
    </Col>
  );
}

VerticalNovelCard.defaultProps = {
  loading: false,
  nid: '',
  title: '',
  genre: ''
};

export default VerticalNovelCard;
