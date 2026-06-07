type ButtonType = "select" | "remove";

type CarActionBtnProps = {
  type: ButtonType;
  handleClick?: () => void;
};

const buttonStyles: Record<ButtonType, string> = {
  remove: "bg-transparent border border-[#09f1fc] text-[#09f1fc]",
  select: "bg-transparent border border-[#ff4a8d] text-[#ff4a8d]",
};

export const CarActionBtn = ({ type, handleClick }: CarActionBtnProps) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${buttonStyles[type]} font-regular py-[2px] px-[6px] rounded text-[9px] cursor-pointer`}
    >
      {type.toUpperCase()}
    </button>
  );
};
