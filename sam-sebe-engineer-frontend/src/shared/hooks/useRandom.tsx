import { useRef } from "react";

export function useRandom() {
  const rngRef = useRef(Math.random); 

  const float = (min = 0, max = 1) =>
    rngRef.current() * (max - min) + min;

  const int = (min: number, max: number) =>
    Math.floor(float(min, max));

  const pick = <T,>(arr: T[]) =>
    arr.length ? arr[int(0, arr.length)] : undefined;

  return { float, int, pick };
}
