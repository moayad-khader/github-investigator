const debounce = (func) => {
    let timer;
    return function (...args) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
};

const pipe = (...fns) => x => {
    const pipeFn = async (v, f) => {
      return f(await v);
    };
    return fns.reduce(pipeFn, Promise.resolve(x));
};
  

export default {
    debounce,
    pipe
}