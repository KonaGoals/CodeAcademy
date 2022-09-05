const getSleepHours = (day) => {
    switch (day) {
      case "monday":
        return 6;
        break;
      case "tuesday":
        return 10;
        break;
      case "wednesday":
        return 6;
        break;
      case "thursday":
        return 8;
        break;
      case "friday":
        return 8;
        break;
      case "saturday":
        return 6;
        break;
      case "sunday":
        return 6.5;
        break;
      default:
        return "Why is this not working";
    }
  };
  
  const getActualSleepHours = () => 
    getSleepHours("monday") +
      getSleepHours("tuesday") +
      getSleepHours("wednesday") +
      getSleepHours("thursday") +
      getSleepHours("friday") +
      getSleepHours("saturday") +
      getSleepHours("sunday");
  
  
  const getIdealSleepHours = () => {
    let idealHours = 7;
    return idealHours * 7;
  };
  
  const calculateSleepDebt = () => {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
  
    if (actualSleepHours === idealSleepHours) {
      console.log(
        "Poifect! Keep it up and you'll see them gains sooner than later"
      );
    } else if (actualSleepHours > idealSleepHours) {
      console.log(
        "You got " +
          (actualSleepHours - idealSleepHours) +
          "more hour(s) than needed. You should use that time to study or exercise."
      );
    } else if (actualSleepHours < idealSleepHours) {
      console.log(
        "You got " +
          (idealSleepHours - actualSleepHours) +
          "less hour(s) less than you needed this week. Get some more Zs before you lose them gainzzzz"
      );
    } else {
      console.log("Error! Something went wrong. Check your code.");
    }
  };
  
  calculateSleepDebt();
  

// Language: javascript