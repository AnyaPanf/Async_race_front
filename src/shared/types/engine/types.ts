export type UseCarAnimationProps = {
  velocity: number | null;
  isRunning: boolean;
};

export type UseRaceAnimationProps = {
  velocity?: number;
  distance?: number;
};

export type CarActionsProps = {
  handleSelectCar: () => void;
  handleRemoveCar: () => void;
  onStart: () => void;
  onStop: () => void;
  isRunning: boolean;
};
