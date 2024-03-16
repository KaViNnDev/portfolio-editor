import React from 'react';
import { SvgProp } from './types';

export const NewtabIcon: React.FC<SvgProp> = ({ width, height, fill, onClick }) => {
  return (
    <svg
      width={width ?? '13'}
      height={height ?? '13'}
      viewBox="0 0 13 13"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M5.08341 1.54134H3.80841C3.01508 1.54134 2.61841 1.54134 2.31525 1.69576C2.04867 1.83154 1.83194 2.04826 1.69616 2.31484C1.54175 2.61801 1.54175 3.01467 1.54175 3.80801V9.19134C1.54175 9.98467 1.54175 10.3813 1.69616 10.6845C1.83198 10.9511 2.0487 11.1678 2.31525 11.3036C2.61771 11.458 3.01437 11.458 3.80629 11.458H9.19387C9.98579 11.458 10.3817 11.458 10.6842 11.3036C10.9512 11.1676 11.168 10.9508 11.304 10.6845C11.4584 10.3813 11.4584 9.98538 11.4584 9.19347V7.91634M12.1667 4.37467V0.833008M12.1667 0.833008H8.62508M12.1667 0.833008L7.20841 5.79134"
        stroke="#0085FF"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
