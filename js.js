let calculator = document.querySelectorAll('.buttons');
let result = document.querySelector('.result');
let clear = document.querySelector('.clear');


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
    e.addEventListener('click', () =>{
        result.textContent += e.textContent;
    })
})

    //rainbow effect
calculator.forEach((x) => {
    x.addEventListener('mouseover', (e) => {
        e.target.style.backgroundColor = `rgba(${Math.floor(Math.random()*512)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, 1)`;
        });
    x.addEventListener('mouseout', (e) =>{
        e.target.style.backgroundColor = 'rgb(15, 15, 15)';
    })
});

clear.addEventListener('click', () => {
    result.textContent = '';
})



