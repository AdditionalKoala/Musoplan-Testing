class Musician{
    constructor(musname, yrsplaying, hrlyrate)
    {
    this.musname = musname;
    this.yrsplaying = yrsplaying;
    this.hrlyrate = hrlyrate;
    }
    IsNameValid(musname)
    {        
        this.musname = musname
        while((this.musname.length>=3) && (this.musname.length<=30))
        {
        return this.musname
        }
        {
        return false
        }
    }
    IsYrsValid(yrsplaying)
    {
        this.yrsplaying = yrsplaying
        while(this.yrsplaying>0)
        {
        return this.yrsplaying
        }
        {
        return false
        }
    }
    IsHrlyValid(hrlyrate)
    {
        this.hrlyrate = hrlyrate
        while(this.hrlyrate>50)
        {
        return this.hrlyrate
        }
        {
        return false
        }
    }
   getMusicianDetails()
    {
        let str1 = " with "+this.yrsplaying+" years of experience and an hourly rate of "+this.hrlyrate
        return str1
    }
    
}

class Guitarist extends Musician 
{
    constructor(musname, yrsplaying, hrlyrate) 
    {
        super(musname, yrsplaying, hrlyrate) // Inheriting the Musician fields in the super class  'Musician'
        this.interestingFact = " "
    }
    getDetails()
    {
        this.interestingFact = "The more strings you have, the better you are" // Assign 'Guitarist' specific 'interesting fact'
        let str3 = this.musname + " is a guitarist"
       let str2 = "\n"+this.interestingFact + "\n" + str3 + super.getMusicianDetails()
        return str2
    }
}

class Bassist extends Musician 
{
    constructor(musname, yrsplaying, hrlyrate) 
    {
        super(musname, yrsplaying, hrlyrate) // Inheriting the Musician fields in the super class  'Musician'
        this.interestingFact = " "
    }
    getDetails()
    {
        this.interestingFact = "Everyone loves a bassist" // Assign 'Guitarist' specific 'interesting fact'
        let str3 = this.musname + " is a bassist"
       let str2 = "\n"+this.interestingFact + "\n" + str3 + super.getMusicianDetails()
        return str2
    }
}

class Percussionist extends Musician 
{
    constructor(musname, yrsplaying, hrlyrate) 
    {
        super(musname, yrsplaying, hrlyrate) // Inheriting the Musician fields in the super class  'Musician'
        this.interestingFact = " "
    }
    getDetails()
    {
        this.interestingFact = "Me drum" // Assign 'Percussionist' specific 'interesting fact'
        let str3 = this.musname + " is a percussionist"
       let str2 = "\n"+this.interestingFact + "\n" + str3 + super.getMusicianDetails()
        return str2
    }
}

class Flautist extends Musician 
{
    constructor(musname, yrsplaying, hrlyrate) 
    {
        super(musname, yrsplaying, hrlyrate) // Inheriting the Musician fields in the super class  'Musician'
        this.interestingFact = " "
    }
    getDetails()
    {
        this.interestingFact = "1989 heavy metal instrument of the year" // Assign 'Percussionist' specific 'interesting fact'
        let str3 = this.musname + " is a flautist"
       let str2 = "\n"+this.interestingFact + "\n" + str3 + super.getMusicianDetails()
        return str2
    }
}
// module.exports = Musician, Guitarist
// module.exports = Bassist, Guitarist, Musician, Percussionist, Flautist

module.exports = {
    Bassist:Bassist,
    Guitarist:Guitarist,
    Musician:Musician,
    Percussionist:Percussionist,
    Flautist:Flautist
}