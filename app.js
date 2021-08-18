function getPin() {
    const pin = Math.round(Math.random() * 10000)
    const pinString = pin + ''
    if (pinString.length == 4) {
        return pin
    } else {
        // console.log('got 3 number', pin)
        return getPin() //recursive way for getting 4 digit
    }
}

function generatePin() {
    const pin = getPin()
        // console.log(pin)
    document.getElementById('pin-input').value = pin //display it in input box
}

//Use event bubble to create calculator and clear
document.getElementById('calculator-body').addEventListener('click', function(event) {
    const number = event.target.innerText
    const calcInput = document.getElementById('calculator-display')
    const previousNumber = calcInput.value
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = ''
        }
    } else {
        const previousNumber = calcInput.value
        const currentNumber = previousNumber + number
        if (currentNumber.length < 5) {
            calcInput.value = currentNumber
        }
    }
})

// matched function 
function matched() {
    const pin = document.getElementById('pin-input').value
    const calculator = document.getElementById('calculator-display')
    const calc = calculator.value;
    // matching result 
    const matched = document.getElementById('matched')
    const unMatched = document.getElementById('unmatched')
    if (pin == calc) {
        matched.style.display = 'block'
        unMatched.style.display = 'none'
    } else {
        unMatched.style.display = 'block'
        matched.style.display = 'none'

        // try left 
        const tryLeft = document.getElementById('try-left')
        const tryText = tryLeft.innerText
        let tryNumber = parseInt(tryText)
        tryNumber = tryNumber - 1
        if (tryNumber > -1) {
            tryLeft.innerText = tryNumber
        } else {
            calculator.style.color = 'red'
            calculator.value = 'You are failed'
            document.getElementById('calculator-display').setAttribute('disabled', true)
            document.getElementById('try-left-btn').setAttribute('disabled', true)
        }
    }
}