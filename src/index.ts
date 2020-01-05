import x2 from '@app/utils';

const x = x2(1);

const fn = (inp: number): boolean => {
  if (inp === x) {
    return false;
  }
  if (inp === 1) {
    return true;
  }

  return false;
};

export default fn;
