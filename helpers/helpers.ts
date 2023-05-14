import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 500);
    };
};

const pipe = (...fns) => x => {
    const pipeFn = async (v, f) => {
      return f(await v);
    };
    return fns.reduce(pipeFn, Promise.resolve(x));
};
  

 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export default {
    debounce,
    pipe,
    cn
}