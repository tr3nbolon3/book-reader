import React from 'react';
import $propTypes from '@prop-types';
import { cleanObject } from '@utils';

function RefreshIcon({
  fill,
  width,
  height,
  margin,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  style: propStyle,
  ...rest
}) {
  const style = cleanObject({ margin, marginTop, marginLeft, marginRight, marginBottom, ...propStyle });

  return (
    <svg width={width} height={height} style={style} {...rest}>
      <path
        fill={fill}
        d="M17.65 6.35A7.958 7.958 0 0 0 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08A5.99 5.99 0 0 1 12 18c-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
}

RefreshIcon.defaultProps = {
  width: 24,
  height: 24,
  fill: '#000',
  style: {},
  margin: null,
  marginTop: null,
  marginLeft: null,
  marginRight: null,
  marginBottom: null,
};

RefreshIcon.propTypes = $propTypes.icon;

export default RefreshIcon;
