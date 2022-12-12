const squareRoot = (firstNumber) =>
{
        const squareNumber = Math.sqrt(firstNumber)
        return squareNumber
}

const multiply = (firstNumber,secondNumber) =>
{
        const product = firstNumber * secondNumber
        return product
}

const divide = (firstNumber,secondNumber) =>
{
        const quotient = firstNumber / secondNumber
        return quotient
}

const subtract = (firstNumber, secondNumber) =>
{
    const difference = firstNumber - secondNumber
    return difference
}

const add = (firstNumber, secondNumber) => 
{
    const sum = firstNumber + secondNumber
    return sum
}

let result = add(17, 9)
console.log(result)
> 26

result = add(-13, -7)
console.log(result)
> -20

result = add(4, 58)
console.log(result)
> 62

result = squareRoot(25)
console.log(result)

result= multiply(100,100)
console.log(result)