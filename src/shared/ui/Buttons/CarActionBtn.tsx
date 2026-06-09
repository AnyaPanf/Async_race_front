type ButtonType = 'select' | 'remove';

type CarActionBtnProps = {
  type: ButtonType;
  handleClick: () => void;
};

const buttonStyles: Record<ButtonType, string> = {
  remove: 'bg-transparent border border-[#ff498d] text-[#ff498d]',
  select: 'bg-transparent border border-[#09f1fc] text-[#09f1fc]',
};

export function CarActionBtn({ type, handleClick }: CarActionBtnProps) {
  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={`${buttonStyles[type]} font-regular py-[2px] px-[6px] rounded text-[9px] cursor-pointer`}
    >
      {type.toUpperCase()}
    </button>
  );
}
