import { SvgProp } from './types';

export const ImageIcon: React.FC<SvgProp> = ({ width, height, fill, onClick }) => {
  return (
    <svg
      width={width ?? '54'}
      height={height ?? '54'}
      viewBox="0 0 54 54"
      fill={fill ?? 'none'}
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
    >
      <path
        d="M46.6494 22.2694C31.9147 20.2453 19.2084 31.186 20.0622 45.6979M14.4893 17.8333C14.4893 19.0158 14.959 20.1498 15.7951 20.9859C16.6312 21.822 17.7652 22.2917 18.9476 22.2917C20.13 22.2917 21.264 21.822 22.1001 20.9859C22.9362 20.1498 23.4059 19.0158 23.4059 17.8333C23.4059 16.6509 22.9362 15.5169 22.1001 14.6808C21.264 13.8447 20.13 13.375 18.9476 13.375C17.7652 13.375 16.6312 13.8447 15.7951 14.6808C14.959 15.5169 14.4893 16.6509 14.4893 17.8333Z"
        stroke="black"
        strokeWidth="3.34375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6875 29.1257C12.8846 28.2674 18.4464 31.2612 21.4535 36.0361"
        stroke="black"
        strokeWidth="3.34375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.6875 26.75C6.6875 17.2916 6.6875 12.5636 9.62554 9.62554C12.5636 6.6875 17.2939 6.6875 26.75 6.6875C36.2084 6.6875 40.9364 6.6875 43.8745 9.62554C46.8125 12.5636 46.8125 17.2939 46.8125 26.75C46.8125 36.2084 46.8125 40.9364 43.8745 43.8745C40.9364 46.8125 36.2061 46.8125 26.75 46.8125C17.2916 46.8125 12.5636 46.8125 9.62554 43.8745C6.6875 40.9364 6.6875 36.2061 6.6875 26.75Z"
        stroke="black"
        strokeWidth="3.34375"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
