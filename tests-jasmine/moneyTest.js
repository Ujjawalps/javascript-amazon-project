import { formatCurrency } from "../scripts/utils/money.js";

describe('test suite : formatCurrency function', () => {
  it('converts cents to dollars', () => {
    expect(formatCurrency(2095)).toEqual("20.95");
  });

  it('works with 0', () => {
    expect(formatCurrency(0)).toEqual("0.00");
  });

  it('rounds down to 2 decimal', () =>{
    expect(formatCurrency(2095.5)).toEqual("20.96");
    expect(formatCurrency(2095.4)).toEqual("20.95");
  });
});