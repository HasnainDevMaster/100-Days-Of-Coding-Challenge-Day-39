"use strict";
// 100 Days Of Coding Challenge!
/** Question 115
Use a switch statement to log the days of the week based on a number (1-7).*/
//----------------------------------------------------------------------------
// Function "logDayOfWeek()" that takes a number as a parameter and logs the corresponding day of the week
function logDayOfWeek(dayNumber) {
    // Switch statement to determine the day of the week
    switch (dayNumber) {
        case 1:
            console.log("Sunday");
            break;
        case 2:
            console.log("Monday");
            break;
        case 3:
            console.log("Tuesday");
            break;
        case 4:
            console.log("Wednesday");
            break;
        case 5:
            console.log("Thursday");
            break;
        case 6:
            console.log("Friday");
            break;
        case 7:
            console.log("Saturday");
            break;
        default:
            console.log("Invalid day number");
    }
}
// log the day of the week for the number "7"
logDayOfWeek(7); // Outputs: Saturday
