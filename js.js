let calculator = document.querySelectorAll('.buttons');
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');
let equal = document.querySelector('#equal');


   //store result
   let displayValue1;
   let displayValue2;
   let operatorr;

 

//basic operators
function sum(a, b){
    return a + b;
}

function divide(a, b){
    return a / b;
}

function multiply(a, b){
    return a * b;
}

function substract(a, b){
    return a - b;
}

//return calculation
function operate(operator, a, b){
    if (operator === '+'){
        return sum(a, b);
    }
    else if (operator === '*'){
        return multiply(a, b);
    }
    else if (operator === '/'){
        return divide(a, b);
    }
    else if (operator === '-'){
        return substract(a, b);
    }
}


    //show numbers after click
calculator.forEach((e) => {

    if (e.id === 'number'){

        e.addEventListener('click', () =>{
            result.textContent += parseInt(e.textContent);
            displayValue1 = result.textContent;
        });
    }

    if (e.id === 'sum' || e.id === 'divide' || e.id === 'multiply' || e.id === 'substract'){
        e.addEventListener('click', () => {
            result.textContent += ' ' + e.textContent + ' ';
            operatorr = e.id;
        })
    }

}
);


    //rainbow effect
calculator.forEach((x) => {
    if (x.id === 'number'){
    x.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgba(${Math.floor(Math.random()*512)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 1)`;
        });
    x.addEventListener('mouseout', (e) =>{
        e.target.style.backgroundColor = 'rgb(15, 15, 15)';
        })
    }
});

let resultsArr = [];

equal.addEventListener('click', () =>{
    resultsArr = result.textContent.split(' ');

}
);


clear.addEventListener('click', () => {
    result.textContent = '';
})



