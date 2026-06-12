import { FormProps } from '@/shared/types/garage/types';

export function Form({
  onSubmit,
  name,
  setName,
  color,
  setColor,
  type,
  error,
}: FormProps) {
  return (
    <form
      className="relative flex items-center gap-1 text-sm bg-[#1c1c1e] rounded-md px-2 py-1"
      onSubmit={onSubmit}
    >
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Car Name"
        className="rounded-md text-white focus:outline-none"
        maxLength={30}
      />

      <input
        type="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="w-[25px] h-7 cursor-pointer"
      />

      <button
        type="submit"
        className="px-2 py-1 bg-[#353638] text-white rounded-md hover:bg-[#fd4a8c] cursor-pointer"
      >
        {type === 'update' ? 'Update' : 'Create'}
      </button>

      {error && (
        <span className="text-red-500 text-xs ml-2 absolute bottom-[-15px] left-0">
          {error}
        </span>
      )}
    </form>
  );
}
