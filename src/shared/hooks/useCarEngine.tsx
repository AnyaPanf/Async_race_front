import {
  useStartStopEngineMutation,
  useSwitchToDriveModeMutation,
} from '@/store/api/engineApi';
import { useRef, useState } from 'react';

type Params = {
  carId: number;
};

export function useCarEngine({ carId }: Params) {
  const carRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const startTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const [isRunning, setIsRunning] = useState(false);

  const [startStopEngine] = useStartStopEngineMutation();
  const [switchToDriveMode] = useSwitchToDriveModeMutation();

  const start = async () => {
    setIsRunning(true);

    const res = await startStopEngine({
      id: carId,
      status: 'started',
    }).unwrap();
    const { velocity, distance } = res;

    durationRef.current = distance / velocity / 1000;
    startTimeRef.current = 0;

    const animate = (time: number) => {
      if (startTimeRef.current === 0) {
        startTimeRef.current = time;
      }

      const elapsed = time - startTimeRef.current;
      const progress = Math.min(elapsed / (durationRef.current * 1000), 1);

      const trackWidth =
        carRef.current?.parentElement?.parentElement?.clientWidth ?? 600;
      const carWidth = carRef.current?.clientWidth ?? 48;
      const startOffset = 75;

      if (carRef.current) {
        carRef.current.style.transform = `translateX(${progress * (trackWidth - carWidth - startOffset)}px)`;
      }

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(animate);
      }
    };

    rafRef.current = requestAnimationFrame(animate);
    drive();
  };

  const drive = async () => {
    try {
      await switchToDriveMode({ id: carId, status: 'drive' }).unwrap();
    } catch {
      stop();
    }
  };

  const stop = async () => {
    setIsRunning(false);

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;

    if (carRef.current) {
      carRef.current.style.transform = 'translateX(0px)';
    }

    await startStopEngine({ id: carId, status: 'stopped' });
  };

  return {
    carRef,
    trackRef,
    isRunning,
    start,
    stop,
  };
}
