import React from 'react';
import { SvgProp } from './types';

export const ItalicIcon: React.FC<SvgProp> = ({ width, height, fill, onClick }) => {
  return (
    <svg
      width={width ?? '4'}
      height={height ?? '12'}
      viewBox="0 0 4 12"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M2.72 2.544C2.464 2.544 2.26133 2.45333 2.112 2.272C1.96267 2.09067 1.90933 1.872 1.952 1.616C1.99467 1.34933 2.11733 1.12533 2.32 0.943999C2.52267 0.762666 2.76267 0.672 3.04 0.672C3.296 0.672 3.49867 0.768 3.648 0.959999C3.808 1.14133 3.86667 1.36 3.824 1.616C3.77067 1.88267 3.64267 2.10667 3.44 2.288C3.23733 2.45867 2.99733 2.544 2.72 2.544ZM0.352 12L1.76 4H3.152L1.744 12H0.352Z"
        fill="black"
      />
    </svg>
  );
};
