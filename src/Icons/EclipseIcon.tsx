import React from 'react';
import { SvgProp } from './types';

export const EclipseIcon: React.FC<SvgProp> = ({ onClick, width, height, fill }) => {
  return (
    <svg
      width={width ?? '3'}
      height={height ?? '4'}
      viewBox="0 0 3 4"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <circle
        cx="1.5"
        cy="2"
        r="1.5"
        fill="black"
      />
    </svg>
  );
};
