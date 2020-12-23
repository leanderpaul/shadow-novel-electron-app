/**
 * Importing npm packages.
 */
import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Importing npm design components.
 */
import { Col, Card, Typography, Button } from 'antd';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import { getGenreValue } from '../../utils/data.utils';

/**
 * Importing styled components.
 */
import { HorizontalNovelCover, CardLoadingSkeleton } from './styles';

/**
 * Importing types.
 */
interface IHorizonatlNovelCard {
  loading: boolean;
  nid: string;
  cover?: string | null;
  title: string;
  genre: string;
  desc: string;
}

/**
 * Constants.
 */

function HorizonatlNovelCard(props: IHorizonatlNovelCard) {
  return (
    <Col span={12}>
      <Link to={`/novel/${props.nid}`}>
        <Card hoverable bodyStyle={{ padding: 0, display: 'flex', overflow: 'hidden' }}>
          <HorizontalNovelCover loading={props.loading} size='sm' className='mr-3' image={props.cover} alt={props.title} />
          {props.loading ? (
            <CardLoadingSkeleton active={true} paragraph={{ rows: 4 }} />
          ) : (
            <div className='py-2 text-justify overflow-hidden'>
              <Typography.Title className='w-100' level={4} ellipsis>
                {props.title}
              </Typography.Title>
              <Link to={{ pathname: '/explore', state: { genre: props.genre } }}>
                <Button type='primary' ghost shape='round' size='small'>
                  {getGenreValue(props.genre)}
                </Button>
              </Link>
              <Typography.Paragraph className='my-1 pt-1 mr-3' ellipsis={{ rows: 5 }}>
                {props.desc}
              </Typography.Paragraph>
            </div>
          )}
        </Card>
      </Link>
    </Col>
  );
}

HorizonatlNovelCard.defaultProps = {
  loading: false,
  nid: '',
  title: '',
  genre: '',
  desc: []
};

export default HorizonatlNovelCard;
