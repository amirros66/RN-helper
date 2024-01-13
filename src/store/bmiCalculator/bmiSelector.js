const selectHeight = (reduxState) => {
  return reduxState.bmi?.height;
};
export { selectHeight };

const selectWeight = (reduxState) => {
  return reduxState.bmi?.weight;
};
export { selectWeight };

const selectBMI = (reduxState) => {
  return reduxState.bmi;
};
export { selectBMI };
