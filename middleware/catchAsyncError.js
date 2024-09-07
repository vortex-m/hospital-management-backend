export const catchAsyncError = (fun) => {
  return (req, res, next) => {
    Promise.resolve(fun(req, res, next)).catch(next);
  };
};
