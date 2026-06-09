import StartIcon from '@/assets/images/Start.svg?react';
import PauseIcon from '@/assets/images/Pause.svg?react';

type ButtonType = 'start' | 'pause';

type CarActivationBtnProps = {
  type: ButtonType;
  handleClick?: () => void;
};

const buttonStyles: Record<ButtonType, string> = {
  start: 'bg-transparent border border-[#67ff49]',
  pause: 'bg-transparent border border-[#ff498d]',
};

const textStyles: Record<ButtonType, string> = {
  start: 'text-[#67ff49]',
  pause: 'text-[#ff498d]',
};

const icons = {
  start: StartIcon,
  pause: PauseIcon,
} as const;

export function CarActivationBtn({ type, handleClick }: CarActivationBtnProps) {
  const Icon = icons[type];

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${buttonStyles[type]} font-regular rounded text-[9px] flex items-center justify-center cursor-pointer`}
    >
      <Icon className={`w-4 h-4 py-1 px-1 rounded ${textStyles[type]}`} />
    </button>
  );
}
