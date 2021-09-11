const bunch = require('./Tcode')
const Troupe=bunch.Troupe

test('Test troupe details',() =>{
    var troupe = new Troupe('Beatles',4,'pop', 60, 2);
    expect(troupe.IsTroupenameValid('Beatles')).toEqual('Beatles')
    expect(troupe.IsInstruValid(4)).toBe(4)
    expect(troupe.IsGenreValid('pop')).toBe('pop')
    expect(troupe.IsRateValid(60)).toBe(60)
    expect(troupe.IsDurationValid(2)).toBe(2)
})
test('Test writing troupe details to file', () =>{
    var troupe = new Troupe('Beatles',4,'pop', 60, 2);
    expect(troupe.writeTxtFile()).toBe(1)
})