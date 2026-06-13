import { SortField, WinnersTableProps } from '@/shared/types/winners/types';
import { Car } from '../GarageSection/components/Car';
import DecreaseIcon from '@/assets/images/Decrease.svg';
import IncreaseIcon from '@/assets/images/Increase.svg';

export function WinnersTable({
  winners,
  sort,
  order,
  onSort,
}: WinnersTableProps) {
  const sortIcon = (field: SortField) => {
    if (sort !== field) {
      return <img src={DecreaseIcon} className="inline h-4 ml-1 opacity-30" />;
    }
    return (
      <img
        src={order === 'ASC' ? IncreaseIcon : DecreaseIcon}
        className="inline h-4 ml-1"
      />
    );
  };

  return (
    <div className="p-4 text-white">
      <table className="w-full border-collapse text-center">
        <thead>
          <tr className="border-y-2 border-[#58e43b]">
            <th className="py-3 w-[10%]">№</th>
            <th className="py-3 w-[20%]">Car</th>
            <th className="py-3 w-[35%]">Name</th>
            <th
              className="py-3 w-[15%] cursor-pointer"
              onClick={() => onSort('wins')}
            >
              Wins {sortIcon('wins')}
            </th>
            <th
              className="py-3 w-[20%] cursor-pointer"
              onClick={() => onSort('time')}
            >
              Best time (seconds) {sortIcon('time')}
            </th>
          </tr>
        </thead>
        <tbody>
          {winners?.map((winner) => (
            <tr
              key={winner?.id}
              className="text-center font-normal text-sm bg-[#0e0e10] border-b border-[#373a3d]"
            >
              <td className="py-0 font-normal">{winner?.id}</td>
              <td className="py-0 flex justify-center relative ml-21">
                <Car color={winner?.color} />
              </td>
              <td className="py-0 font-normal">{winner?.name}</td>
              <td className="py-0 font-normal">{winner?.wins}</td>
              <td className="py-0 font-normal">{winner?.time?.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
