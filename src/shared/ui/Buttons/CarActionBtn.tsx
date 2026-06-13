type ButtonType = 'select' | 'remove';

type CarActionBtnProps = {
  type: ButtonType;
  handleClick: () => void;
  disabled: boolean;
};

const buttonStyles: Record<ButtonType, string> = {
  remove: 'border-[#ff498d] text-[#ff498d]',
  select: 'border-[#09f1fc] text-[#09f1fc]',
};

export function CarActionBtn({
  type,
  handleClick,
  disabled,
}: CarActionBtnProps) {
  return (
    <button
      type="button"
      onClick={() => handleClick()}
      className={`${disabled ? 'text-[#606767] border-[#606767]' : buttonStyles[type]} font-regular py-0.5 px-1.5 rounded text-[9px] cursor-pointer bg-transparent border`}
    >
      {type.toUpperCase()}
    </button>
  );
}
