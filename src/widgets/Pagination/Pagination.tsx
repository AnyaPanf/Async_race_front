import ArrowRightIcon from '@/assets/images/ArrowRight.svg';
import ArrowLeftIcon from '@/assets/images/ArrowLeft.svg';
import { PaginationProps } from '@/shared/types/garage/types';
import { PaginationButton } from '@/shared/ui/Buttons/PaginationButton';

export const Pagination = ({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-4">
      <PaginationButton
        icon={ArrowRightIcon}
        onPageChange={onPageChange}
        page={page}
        direction="previous"
        totalPages={totalPages}
      />
      <span>
        {page} / {totalPages}
      </span>
      <PaginationButton
        icon={ArrowLeftIcon}
        onPageChange={onPageChange}
        page={page}
        direction="next"
        totalPages={totalPages}
      />
    </div>
  );
};
