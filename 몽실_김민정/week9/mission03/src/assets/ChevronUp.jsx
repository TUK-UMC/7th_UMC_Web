export const ChevronUp = ({ ...rest }) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='h-6 w-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
      strokeWidth={2}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M5 15l7-7 7 7' />
    </svg>
  );
};
