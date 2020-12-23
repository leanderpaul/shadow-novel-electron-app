/**
 * Importing npm packages.
 */
import React from 'react';

/**
 * Importing npm design components.
 */
import { Image, Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

/**
 * Importing user defined components.
 */

/**
 *  Importing user defined modules.
 */
import DefaultNovelCover from '../../assets/img/default-novel-cover.jpg';

/**
 * Importing styled components.
 */

/**
 * Importing types.
 */
type TSize = 'sm' | 'default' | 'lg' | 'xl' | 'xs';

type ISizes = {
  [k in TSize]: { width?: number; height?: number };
};

interface INovelCoverProps {
  image?: string | null;
  size: TSize;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  loading: boolean;
  preview: boolean;
}

/**
 * Constants.
 */
const sizes: ISizes = {
  xs: { width: 75, height: 100 },
  sm: { width: 150, height: 200 },
  default: {},
  lg: { width: 225, height: 300 },
  xl: { width: 300, height: 400 }
};

function NovelCover(props: INovelCoverProps) {
  const size = sizes[props.size];
  return (
    <Image
      style={props.style}
      className={props.className}
      width={size.width}
      height={size.height}
      src={props.image || DefaultNovelCover}
      alt={props.alt}
      preview={props.preview}
      placeholder={
        <div className='d-flex justify-content-center align-items-center'>
          <Image width={size.width} height={size.height} src={DefaultNovelCover} alt={props.alt} />
          <Spin className='position-absolute' indicator={<LoadingOutlined style={{ fontSize: 30 }} spin />} />
        </div>
      }
    />
  );
}

NovelCover.defaultProps = {
  size: 'default',
  loading: false,
  preview: false
};

export default NovelCover;
