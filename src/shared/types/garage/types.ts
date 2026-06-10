export type Car = {
  name: string;
  color: string;
  id: number;
};

export type CarActionsProps = {
  handleSelectCar: () => void;
  handleRemoveCar: () => void;
};

export type GarageSectionProps = {
  handleSelectCar: (id: number) => void;
};

export type ControlPannelProps = {
  selectedCarId: number | null;
};

type CarCustomizerText = 'create' | 'update';

export type CustomizeCarData = {
  name: string;
  color: string;
};

export type CarCustomizerProps = {
  type: CarCustomizerText;
  handleClick: (data: CustomizeCarData) => Promise<unknown>;
};

export type UseCarFormParams = {
  type: CarCustomizerText;
  carData?: Car | null;
};

export type FormProps = {
  type: 'create' | 'update';
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  color: string;
  setColor: React.Dispatch<React.SetStateAction<string>>;
  error: string | null;
};

export type GarageListProps = {
  cars: Car[];
};

export type PaginationProps = {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

export type PaginationButtonProps = {
  page: number;
  icon: string;
  onPageChange: (page: number) => void;
  direction: string;
  totalPages: number;
};
