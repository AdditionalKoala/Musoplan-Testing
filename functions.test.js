const functions = require('./functions');

test('Name should be between 3-30 characters', () => {
    expect(functions.IsNameValid('Smita')).toBe(true);
  });

test('Number of instruments should be between 1-5', () => {
    expect(functions.IsNumValid(4)).toBe(true);
  });

test('Genre should be rock/pop/jazz', () => {
    expect(functions.IsGenreValid('jazz')).toBe(true);
  });

test('Hourly rate should be >50', () => {
    expect(functions.IsRateValid(60)).toBe(true);
  });

test('Duration should be between 0.5 and 3 hours', () => {
    expect(functions.IsDurationValid(2)).toBe(true);
  });

test('Cost should be the product of rate and duration', () => {
    expect(functions.costCalculate(80,2)).toBe(160);
  });