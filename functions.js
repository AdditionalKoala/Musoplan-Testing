  const functions = {
      //function to check whether name length is between 3-30 character limit
      IsNameValid: name => (name.length>=3) && (name.length<=30),

      //function to check whether number of instruments is between 1-5
      IsNumValid: instruments => (instruments>0) && (instruments<=5),

      //function to check whether genre is rock / pop / jazz
      IsGenreValid: genre => (genre == 'rock') || (genre == 'pop') || (genre == 'jazz'),

      //function to check if hourly rate is greater than 50
      IsRateValid: rate => (rate>=50),

      //function to check if duration is between 0.5 to 3 hours
      IsDurationValid: duration =>(duration>=0.5) && (duration<=3),

      //function to calculate troupe costs using rate and duration
      costCalculate: (rate1, duration1) => {
          if ((functions.IsRateValid(rate1)==true) && (functions.IsDurationValid(duration1)==true))
          {
            return rate1*duration1
          }
          else
          {
            return 'error'
          }
        }
    }



  module.exports = functions;