// cn function allow us to combine lot of class name 
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs) => {
    return twMerge(clsx(inputs));
};