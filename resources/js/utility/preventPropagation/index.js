const preventPropagation = (event, callback) => (dispatch) => {
  event.preventDefault();
  event.stopPropagation();
  callback && callback();
};

export default preventPropagation;
