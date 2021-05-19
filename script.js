
   function getOperator(str) {
    let operator;
    do {
      operator = prompt(str) 
    }
    while (!isOperatorValid(operator)) 
    return operator;
   }


   function isOperatorValid(operator) {
     return operator === "*" || operator === "/" || operator === "+" || operator === "-";
   }


   function getOperands(message) {
     let answer;
     do {
       answer = prompt(message);
     }
     while (!isOperandsValid(answer));
     return answer.split(",");
   }


   function isOperandsValid(str) {
     return str !== null && str !== '';
   }


   function isValidOperand(num) {
     return !isNaN(num);
   }


   function calculate(operator, a, b) {
     switch(operator) {
       case '+': return a + b;
       case '-': return a - b;
       case '*': return a * b;
       case '/': return a / b;
     }
   }


   function calcResult(validOperator, operands) {
    
    for (let i = 0; i < operands.length; i++) {
      const operand = +operands[i];
      if(!isValidOperand(operand)) {
        continue;
      }

      if(result === null) {
        result = operand;
        expression = operand;
        continue;
      }

      result = calculate(validOperator, result, operand);
      expression += ( `${validOperator} ${operand}`) ;
    }
   }

   
   let result = null;
   let expression = '';  
   const validOperator = getOperator('Введите оператор для калькуляции');
   const operands = getOperands('Введите числа для калькуляции через запятую');
   calcResult(validOperator, operands);
   alert( `${expression} = ${result} `);




