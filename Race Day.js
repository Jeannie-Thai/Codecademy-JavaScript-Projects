//Design the logic for an app that will give runners information on race day!
let raceNumber = Math.floor(Math.random() * 1000);
let earlyRegistration = true;
let runnerAge  = 17;

//check if adult runner registered early receive a race number at or above 1000
if (earlyRegistration === true && runnerAge > 18){
raceNumber += 1000;}

// early registered adults, late registered adults, and youth registrants
if (earlyRegistration === true && runnerAge > 18){
  console.log(`Your race starts at 9:30 am and your race number is: ${raceNumber}`);
} else 
if (earlyRegistration === false && runnerAge > 18){
  console.log(`Your race starts at 11:00 am and your race number is: ${raceNumber}`);
} else 
if (runnerAge < 18){
  console.log(`Your race starts at 12:30 pm and your race number is: ${raceNumber}`);
} else {
  console.log('Please see the registration desk to get your number');
 }
