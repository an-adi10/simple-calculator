

let operand1 = '';
let operand2 = '';
let operator = '';

function currentDisplay(){
    document.getElementById("display").innerText = operand1 + operator + operand2;
}

function digitFunction(num) {
    console.log("typed",num);

    if(operand1 === '' || operator ==='' ){
        operand1 = operand1 + num;
    console.log("operand1", operand1);
    currentDisplay();
        return;
    }

    operand2 = operand2 + num;
    console.log("operand2",operand2);
    currentDisplay();
}

function controlsFunction(operatorInput){
   operator = operatorInput;
   currentDisplay();
}

function evaluateFunction(){
   if(operand1 !== '' && operand2 !=='' && operator !==''){
        let parsedoperand1 = parseFloat(operand1);
        let parsedoperand2 = parseFloat(operand2);
        let finalExpression = eval(parsedoperand1 + operator + parsedoperand2);
       
        document.getElementById("display").innerText = finalExpression;

        operand1 = '';
        operand2 = '';
        operator = '';
        console.log("answer", finalExpression);
   }
}

function clearFunction(){
    document.getElementById("display").innerText = 0;
    operand1 = '';
}

function fractionFunction(){

    if(operand1 !== ''){
        let parsedoperand1 = parseFloat(operand1);
        let answer = eval(1 / parsedoperand1);
        document.getElementById("display").innerText = answer;
        operand1 = '';
    }
}

function squareFunction(){

    if(operand1 !== ''){
        let parsedoperand1 = parseFloat(operand1);
        let answer = eval(parsedoperand1*parsedoperand1);
        document.getElementById("display").innerText = answer;
        operand1 = '';
    }
}

function sqrtFunction(){

    if(operand1 !== ''){
        let parsedoperand1 = parseFloat(operand1);
        let answer = Math.sqrt(parsedoperand1);
        document.getElementById("display").innerText = answer;
        operand1 = '';
    }
}



