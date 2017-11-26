// React 16 expects this to be defined.
// To get rid of the annoying warning.
global.requestAnimationFrame = (callback) => {
  setTimeout(callback, 0);
};
