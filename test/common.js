window.listenOnce = (elem, type, callback) => {
  const listener = () => {
    elem.removeEventListener(type, listener);
    callback();
  };
  elem.addEventListener(type, listener);
};
