const buttons = document.querySelectorAll('button')
const output= document.querySelector('.result')
const percentage = document.querySelector('#percent')

// console.log(buttons)


let userInput = []
let calculate


function compute(button) {
    // console.log(button)
    const value = button.textContent

    if(value === "AC"){
        userInput = []
    output.textContent = [0]
    } 
   
    else if (value === "="){
        // console.log(accumulativeCalculation)
        output.textContent = eval(calculate)
    }

    else if (value === "De"){
        userInput.splice(-1, 1)
        calculate = userInput.join('')
        output.textContent = calculate
    }


    else{
        userInput.push(value)
        calculate = userInput.join('')
        output.textContent = calculate
    }

}



 buttons.forEach(button => button.addEventListener('click', () => compute(button)))