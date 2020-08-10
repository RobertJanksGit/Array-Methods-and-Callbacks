import { fifaData } from './fifa.js';
console.log(fifaData);

console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing 
the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */

console.log(fifaData[828]["Home Team Name"]);
console.log(fifaData[828]["Away Team Name"]);
console.log(fifaData[828]["Home Team Goals"]);
console.log(fifaData[828]["Away Team Goals"]);
console.log(fifaData[828]["Win conditions"]);

/* Task 2: Create a function called  getFinals that takes `data` as an argument 
and returns an array of objects with only finals data */

function getFinals(data) {
    return data.filter((curentItem) => {
        if (curentItem.Stage === "Final"){
            return curentItem;
        }
    });
};
console.log(getFinals(fifaData));
/* Task 3: Implement a higher-order function called `getYears` that accepts the callback 
function `getFinals`, and returns an array called `years` containing all of the years in the dataset */

function getYears(getFinals){
    const years = getFinals.map((curentItem) => {
    return (curentItem.Year);
    });
    return years;
};

console.log(getYears(getFinals(fifaData)));

/* Task 4: Implement a higher-order function called `getWinners`, that accepts the callback 
function `getFinals()` and determine the winner (home or away) of each `finals` game. Return 
the name of all winning countries in an array called `winners` */ 

function getWinners(getFinals) {
    const winners = getFinals.map((curentItem) => {
        if (curentItem["Home Team Goals"] > curentItem["Away Team Goals"]) {
            return curentItem["Home Team Name"];
        } else {return curentItem["Away Team Name"]}
    });
    return winners;
};

console.log(getWinners(getFinals(fifaData)));

/* Task 5: Implement a higher-order function called `getWinnersByYear` 
that accepts the following parameters and returns a set of strings 
"In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */

function getWinnersByYear(getWinners, getYears) {
const year = getYears;
const country = getWinners;
year.forEach((curentItem, i) => {
    console.log(`In ${curentItem}, ${country[i]} won the world cup!`);  
});

};

getWinnersByYear(getWinners(getFinals(fifaData)), getYears(getFinals(fifaData)));

/* Task 6: Write a function called `getAverageGoals` that accepts a parameter `data` 
and returns the the average number of home team goals and away team goals scored per 
match (Hint: use .reduce and do this in 2 steps) */

function getAverageGoals(data) {
    const totalGoals = data.reduce((total, curentItem) => {
        return total += curentItem["Away Team Goals"] + curentItem["Home Team Goals"];
    }, 0);
    return totalGoals / data.length;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` 
and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data, teamInitials) {
    const initials = [];
    data.forEach((curentItem) => {
        if (curentItem["Home Team Goals"] > curentItem["Away Team Goals"]) {
            initials.push(curentItem["Home Team Initials"]);
        }else {initials.push(curentItem["Away Team Initials"])};
    });
    const teamWins = initials.filter((curentItem) => {
        return curentItem === teamInitials;
    });
    return teamWins.length;
};

console.log(getCountryWins(fifaData, "MEX"));


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns 
the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(data) {
    
};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals 
scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */
