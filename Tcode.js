//const { SSL_OP_EPHEMERAL_RSA } = require('constants');

fs = require('fs');
class Troupe{
    constructor(troupename, instrunum, troupegenre, trouperate, troupeduration)
    {
    this.troupename = troupename;
    this.instrunum = instrunum;
    this.troupegenre = troupegenre;
    this.trouperate = trouperate;
    this.troupeduration = troupeduration;
    }
    IsTroupenameValid(troupename)
    {        
        this.troupename = troupename
        while((this.troupename.length>=3) && (this.troupename.length<=30))
        {
        return this.troupename
        }
        {
        return false
        }
    }
    IsInstruValid(instrunum)
    {
        this.instrunum = instrunum
        while((this.instrunum>0) && (this.instrunum<=5))
        {
        return this.instrunum
        }
        {
        return false
        }
    }
    IsGenreValid(troupegenre)
    {
        this.troupegenre = troupegenre
        while((this.troupegenre == 'rock') || (this.troupegenre == 'pop') || (this.troupegenre == 'jazz'))
        {
        return this.troupegenre
        }
        {
        return false
        }
    }
    IsRateValid(trouperate)
    {
        this.trouperate = trouperate
        while((this.trouperate>=50))
        {
        return this.trouperate
        }
        {
        return false
        }
    }
    IsDurationValid(troupeduration)
    {
        this.troupeduration = troupeduration
        while((this.troupeduration>=0.5) && (this.troupeduration<=3))
        {
        return this.troupeduration
        }
        {
        return false
        }
    }
    writeTxtFile()//Writing troupe names and troupe details to txt files
    {
        var troupeDetails={
            name:this.troupename,
            instruments:this.instrunum,
            genre:this.troupegenre,
            rate:this.trouperate,  
            duration: this.troupeduration }
        fs.writeFile("troupelist.txt",this.troupename, 'utf-8', function (err) {
        if (err) return console.log(err);//writes the following troupe names to file
        });
        let val = JSON.stringify(troupeDetails)
        val = val.replace(/"/g,'');
        val = val.replace(/,/g,'\t');
        fs.writeFile("descriptions.txt",val+"\n", 'utf-8', function (err) {
        if (err) return console.log(err);//writes the troupe details to a file
        });
        return 1
    }
}
module.exports = {
    Troupe:Troupe
}


