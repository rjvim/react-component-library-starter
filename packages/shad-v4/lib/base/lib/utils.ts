import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// import { extendTailwindMerge } from "tailwind-merge";

// const customTwMerge = extendTailwindMerge({
//   prefix: "rpr-",
// });

// export function cn(...inputs: ClassValue[]) {
//   return customTwMerge(clsx(inputs));
// }
