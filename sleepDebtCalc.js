const getSleepHours = day => {
    switch (day) {
      case "monday":
        return 4;
        break;
      case "tuesday":
        return 10;
        break;
      case "wednesday":
        return 3;
        break;
      case "thursday":
        return 8;
        break;
      case "friday":
        return 5;
        break;
      case "saturday":
        return 6;
        break;
      case "sunday":
        return 6.5;
        break;
      default:
       return "Why is this not working";
    };
  };
  
  const getActualSleepHours = () => {
    getSleepHours('monday') + getSleepHours('day') + getSleepHours('tuesday') +  getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday')
  }
  
  const getIdealSleepHours = () => {
    let idealHours = 8
    return idealHours * 7;
  }
  
  const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours()
    let idealSleepHours = getIdealSleepHours()
  }
  
  const results = () => {
    
  }
  
  console.log(getSleepHours('wednesday'));