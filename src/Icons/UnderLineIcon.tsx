import React from 'react';

export const UnderLineIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width,
  height,
  fill,
  onClick,
}) => {
  return (
    <svg
      width={width ?? '11'}
      height={height ?? '15'}
      viewBox="0 0 11 15"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M5.216 12.224C3.968 12.224 2.944 11.872 2.144 11.168C1.344 10.464 0.944 9.52 0.944 8.336V0.799999H3.136V8.16C3.136 8.74667 3.30133 9.21067 3.632 9.552C3.97333 9.89333 4.50133 10.064 5.216 10.064C5.93067 10.064 6.45333 9.89333 6.784 9.552C7.12533 9.21067 7.296 8.74667 7.296 8.16V0.799999H9.504V8.336C9.504 9.52 9.104 10.464 8.304 11.168C7.504 11.872 6.47467 12.224 5.216 12.224Z"
        fill="black"
      />
      <path
        d="M0 13.6H10.448V14.4H0V13.6Z"
        fill="black"
      />
    </svg>
  );
};
