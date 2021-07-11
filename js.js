let calculator = document.querySelectorAll('.buttons');
let result = document.querySelector('.result');

calculator.forEach((e) => {
    e.addEventListener('click', () =>{
        result.textContent = e.textContent;
    })
})

