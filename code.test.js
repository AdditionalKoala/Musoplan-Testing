const bunch = require('./code')
const Musician = bunch.Musician
const Guitarist = bunch.Guitarist
const Bassist = bunch.Bassist
const Percussionist = bunch.Percussionist
const Flautist = bunch.Flautist

test('Test musician details',() =>{
    musician = new Musician('Smita',5,60);
    expect(musician.IsNameValid('Smita')).toEqual('Smita')
    expect(musician.IsYrsValid(5)).toBe(5)
    expect(musician.IsHrlyValid(60)).toBe(60)
})
test('Test musician string',() =>{
    musician = new Musician('Grace',5,60);
    expect(musician.getMusicianDetails()).toBe(' with 5 years of experience and an hourly rate of 60')
})
test('Test guitarist details',() =>{
    guitarist = new Guitarist('Robins',6,90);
    expect(guitarist.IsNameValid('Robins')).toEqual('Robins')
    expect(guitarist.IsYrsValid(6)).toBe(6)
    expect(guitarist.IsHrlyValid(90)).toBe(90)
})
test('Test guitarist summary',() =>{
    guitarist = new Guitarist('Robins',5,60);
    s='\nThe more strings you have, the better you are\n' 
    s+='Robins is a guitarist with 5 years of experience and an hourly rate of 60'
    expect(guitarist.getDetails()).toEqual(s)
})
test('Test bassist details',() =>{
    bassist = new Bassist('Joanna',2,90);
    expect(bassist.IsNameValid('Joanna')).toEqual('Joanna')
    expect(bassist.IsYrsValid(2)).toBe(2)
    expect(bassist.IsHrlyValid(90)).toBe(90)
})
test('Test bassist summary',() =>{
    bassist = new Bassist('Joanna',2,90);
    s='\nEveryone loves a bassist\n' 
    s+='Joanna is a bassist with 2 years of experience and an hourly rate of 90'
    expect(bassist.getDetails()).toEqual(s)
})
test('Test percussionist details',() =>{
    percussionist = new Percussionist('Moanna',1,75);
    expect(percussionist.IsNameValid('Moanna')).toEqual('Moanna')
    expect(percussionist.IsYrsValid(1)).toBe(1)
    expect(percussionist.IsHrlyValid(75)).toBe(75)
})
test('Test percussionist summary',() =>{
    percussionist = new Percussionist('Moanna',1,75);
    s='\nMe drum\n' 
    s+='Moanna is a percussionist with 1 years of experience and an hourly rate of 75'
    expect(percussionist.getDetails()).toEqual(s)
})
test('Test flautist details',() =>{
    flautist = new Flautist('Goanna',2,205);
    expect(flautist.IsNameValid('Goanna')).toEqual('Goanna')
    expect(flautist.IsYrsValid(2)).toBe(2)
    expect(flautist.IsHrlyValid(205)).toBe(205)
})
test('Test flautist summary',() =>{
    flautist = new Flautist('Goanna',2,205);
    s='\n1989 heavy metal instrument of the year\n' 
    s+='Goanna is a flautist with 2 years of experience and an hourly rate of 205'
    expect(flautist.getDetails()).toEqual(s)
})