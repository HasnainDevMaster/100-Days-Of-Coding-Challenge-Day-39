"use strict";
// 100 Days Of Coding Challenge!
/** Question 116
Create a switch case that matches several cases to the same code block, representing seasons.*/
//----------------------------------------------------------------------------------------------
// Function "logSeason()" that takes a number as a parameter and logs the season based on the month
function logSeason(month) {
    // Switch statement to determine the season based on the month
    switch (month) {
        case 12:
        case 1:
        case 2:
            console.log("Winter");
            break;
        case 3:
        case 4:
        case 5:
            console.log("Spring");
            break;
        case 6:
        case 7:
        case 8:
            console.log("Summer");
            break;
        case 9:
        case 10:
        case 11:
            console.log("Autumn");
            break;
        default:
            console.log("Invalid month number");
    }
}
// log the season for different months
logSeason(4); // Outputs: Spring
