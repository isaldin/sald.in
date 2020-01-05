import x2 from '@app/utils';

describe('x2', () => {
  it('should increase value by same', () => {
    expect(x2(3)).toEqual(6);
    expect(x2(5)).toEqual(10);
  });
});
