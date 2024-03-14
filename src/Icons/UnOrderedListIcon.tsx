import React from 'react';

export const UnOrderedListIcon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  width,
  height,
  fill,
  onClick,
}) => {
  return (
    <svg
      width={width ?? '15'}
      height={height ?? '12'}
      viewBox="0 0 15 12"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M4.39279 1H13.723M4.39279 6.08919H13.723M4.39279 11.1784H13.723M1 1V1.00848M1 6.08919V6.09767M1 11.1784V11.1869"
        stroke="black"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
