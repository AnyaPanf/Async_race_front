import { WinnerModalProps } from '@/shared/types/winners/types';

export const WinnerModal = ({ winner, onClose }: WinnerModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/60">
      <div className="p-2 border-2 border-[#27d9e8] rounded-2xl">
        <div className="p-6 border-2 border-[#ff4a8d] bg-[#0e0e10] min-w-[300px] rounded-2xl">
          <div className="neon-title text-center mb-7">WINNER</div>

          <p className="text-center text-gray-300">{winner?.name}</p>
          <p className="text-center text-gray-300">{`Time: ${winner?.time?.toFixed(2)}`}</p>

          <div className="flex justify-center mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-3 py-1 border border-[#58e43b] text-[#58e43b] hover:bg-[#58e43b] rounded-2xl hover:text-black transition"
            >
              Woo Hoo!
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
