import { ValidatorUi } from '../src';

describe('Test Validator UI utils', () => {
  it('Variant Outline', () => {
    expect(ValidatorUi.isValidVariant('outline')).toEqual(true);
  });
  it('Variant Primary????', () => {
    expect(ValidatorUi.isValidVariant('primary')).toEqual(false);
  });
});
