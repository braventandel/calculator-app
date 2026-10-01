 //Basic Math Functions
        const add = function (a, b) {
            return a + b;
        }

        const subtract = function (a, b) {
            return a - b;
        }

        const multiply = function (a, b) {
            return a * b;
        }

        const divide = function (a, b) {
            return a / b;
        }

        //Operate Function
        const operate = function (operator, num1, num2) {
            switch (operator) {
                case '+':
                    return add(num1, num2);
                case '-':
                    return subtract(num1, num2);
                case '*':
                    return multiply(num1, num2);
                case '/':
                    if (num2 === 0) return "Error: Can't Divide by Zero";
                    return divide(num1, num2);
                default:
                    return "Invalid Operator";
            }
        }