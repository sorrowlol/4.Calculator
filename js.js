let calculator = document.querySelectorAll('.buttons');
let result = document.querySelector('.result');
let equal = document.querySelector('#equal');
let clearbutton = document.querySelector('.clearbutton')
let deletebutton = document.querySelector('.deletebutton')


   //store result
   let displayValue1;
   let displayValue2;
   let operator;

 

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
    if (operator === 'sum'){
        return sum(a, b);
    }
    else if (operator === 'multiply'){
        return multiply(a, b);
    }
    else if (operator === 'divide'){
        return divide(a, b);
    }
    else if (operator === 'substract'){
        return substract(a, b);
    }
}


    //show numbers after click
calculator.forEach((e) => {

    if (e.id === 'number'){

        e.addEventListener('click', () =>{
            result.textContent += parseInt(e.textContent);;
        });
    }

    if (e.id === 'sum' || e.id === 'divide' || e.id === 'multiply' || e.id === 'substract'){
        e.addEventListener('click', () => {
            result.textContent += ' ' + e.textContent + ' ';
            operator = e.id;

        })
    }
});

//clear and delete menu

clearbutton.addEventListener('mouseover', ((e) =>{
    e.target.style.backgroundColor = 'red';
}))
clearbutton.addEventListener('mouseout', (e) =>{
    e.target.style.backgroundColor = 'black';
})

deletebutton.addEventListener('mouseover', (e) =>{
    e.target.style.backgroundColor = 'red';
})
deletebutton.addEventListener('mouseout', (e) =>{
    e.target.style.backgroundColor = 'black';
})



    //buttons
calculator.forEach((x) => {

    if (x.id === 'number'){
    x.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = 'purple';
        });
    }
    x.addEventListener('mouseout', (e) =>{
        e.target.style.backgroundColor = 'black';
        })
    
    if (x.id === 'sum' || x.id === 'divide' || x.id === 'multiply' || x.id === 'substract'){
        x.addEventListener('click', (e) => {
            e.target.style.backgroundColor = 'green';
        });
    }
});

let resultsArr;

equal.addEventListener('click', () =>{
    resultsArr = result.textContent.split(' ');
    result.textContent = operate(operator, Number(resultsArr[0]), Number(resultsArr[2]))
});

clearbutton.addEventListener('click', () => {
    result.textContent = '';
})

let resultsm1;

deletebutton.addEventListener('click', () => {
    resultsArr = result.textContent;
    resultsArr = resultsArr.substring(0, resultsArr.length - 1);
    result.textContent = resultsArr;

})