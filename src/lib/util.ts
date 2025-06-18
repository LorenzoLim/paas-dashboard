import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: any[]): any => {
  return twMerge(clsx(inputs));
};
