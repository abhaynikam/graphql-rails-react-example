import toastr from 'toastr';

export const showToastr = (type, ...rest) => {
  toastr[type](...rest);
};

export const showToastrError = errObj => {
  console.log(errObj);
  showToastr('error', errObj.error || 'Something went wrong.', null, {
    timeOut: 0,
    extendedTimeOut: 0,
  });
};
