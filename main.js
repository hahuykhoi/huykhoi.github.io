const numberOne = document.querySelector('.container__number--one')
const operator = document.querySelector('.container__operator')
const numberTwo = document.querySelector('.container__number--two')
const buttonResult = document.querySelector('.btn-result')
const resultOperator = document.querySelector('.result')

buttonResult.onclick = function () {
    let valueOne = Number(numberOne.value)
    const phepTinh = operator.value
    let valueTwo = Number(numberTwo.value)
    let result = 0      
    switch (phepTinh) {
        case "+":
            result = valueOne + valueTwo
            resultOperator.innerText = `${result}`
            break;
        case "-":
            result = valueOne - valueTwo
            resultOperator.innerText = `${result}`
            break;
        case "*":
            result = valueOne * valueTwo
            resultOperator.innerText = `${result}`
            break;
        case "/":
            if (valueTwo == 0) {
                alert("Vui lòng nhập số thứ 2 khác 0")
            } else {
                result = valueOne / valueTwo
                resultOperator.innerText = `${result}`
            }
            break;
        default:
            alert("Vui lòng nhập  + - * /")
            break;
    }
}