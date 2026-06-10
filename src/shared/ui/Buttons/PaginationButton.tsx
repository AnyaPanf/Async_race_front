import { PaginationButtonProps } from '@/shared/types/garage/types';

export const PaginationButton = ({
  icon,
  onPageChange,
  page,
  direction,
  totalPages,
}: PaginationButtonProps) => {
  const isDisabled =
    direction === 'previous' ? page === 1 : page === totalPages;

  const handleClick = () => {
    if (isDisabled) return;

    onPageChange(direction === 'previous' ? page - 1 : page + 1);
  };

  return (
    <button
      type="button"
      disabled={isDisabled}
      className="cursor-pointer disabled:opacity-50"
      onClick={handleClick}
    >
      <img src={icon} alt={direction} className="h-7" />
    </button>
  );
};
