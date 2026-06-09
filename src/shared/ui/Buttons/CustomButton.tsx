import GenerateIcon from '@/assets/images/Create.svg?react';
import ResetIcon from '@/assets/images/Reset.svg?react';
import RaceIcon from '@/assets/images/Play.svg?react';

type ButtonType = 'race' | 'reset' | 'generate';

type CustomButtonProps = {
  title: string;
  type: ButtonType;
  handleClick?: () => void;
};

const icons = {
  race: RaceIcon,
  reset: ResetIcon,
  generate: GenerateIcon,
} as const;

const buttonStyles: Record<ButtonType, string> = {
  race: 'bg-[#ff4a8d] text-[#500428]',
  reset: 'bg-transparent border border-[#09f1fc] text-[#09f1fc]',
  generate: 'bg-transparent border border-[#67ff49] text-[#67ff49]',
};

const textColors: Record<ButtonType, string> = {
  race: 'text-[#500428]',
  reset: 'text-[#09f1fc]',
  generate: 'text-[#67ff49]',
};

export function CustomButton({ title, type, handleClick }: CustomButtonProps) {
  const Icon = icons[type];

  return (
    <button
      type="button"
      className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer transition ${buttonStyles[type]}`}
      onClick={handleClick}
    >
      <Icon className={`w-4 h-4 ${textColors[type]}`} />
      <p>{type === 'generate' ? 'Generate cars' : title}</p>
    </button>
  );
}
