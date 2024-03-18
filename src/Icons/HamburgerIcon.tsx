import React from 'react';
import { SvgProp } from './types';

export const HamburgerIcon: React.FC<SvgProp> = ({ onClick, width, height, fill }) => {
  return (
    <svg
      width={width ?? '10'}
      height={height ?? '8'}
      viewBox="0 0 10 8"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <rect
        width="9.6"
        height="1.02857"
        rx="0.514286"
        fill="#A2A2A2"
      />
      <rect
        y="3.42859"
        width="9.6"
        height="1.02857"
        rx="0.514286"
        fill="#A2A2A2"
      />
      <rect
        y="6.85718"
        width="9.6"
        height="1.02857"
        rx="0.514286"
        fill="#A2A2A2"
      />
    </svg>
  );
};
