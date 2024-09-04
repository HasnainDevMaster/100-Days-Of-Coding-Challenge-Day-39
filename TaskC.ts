// 100 Days Of Coding Challenge!

/** Question 117: “Evaluating Expressions with Default Cases”
Implement a switch statement that evaluates an expression and uses the default case if none of the cases match.*/

//----------------------------------------------------------------------------------------------------------------

// Function "evaluateExpression()" takes a string as a parameter and returns nothing
function evaluateExpression(expression: string): void {
  // Switch statement to evaluate the expression
  switch (expression) {
    case "add":
      console.log("Perform addition");
      break;
    case "subtract":
      console.log("Perform subtraction");
      break;
    case "multiply":
      console.log("Perform multiplication");
      break;
    case "divide":
      console.log("Perform division");
      break;
    default:
      console.log("Unknown operation");
  }
}

// log the result of the function "evaluateExpression()" with the argument "multiply"
evaluateExpression("multiply"); // Outputs: Perform multiplication
