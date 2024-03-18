const name = 'Alex'

function greetingUser(name){
    return `Hello ${name}`
}
console.log(greetingUser(name))

const array = [6, 3, 29, 59, 83, 58, 53, 40, 95, 24, 74, 34, 8, 2, 48, 4, 17, 93, 96, 52]

function lengthCondition(array){
    if(array.length > 10){
        return array.length
    }
}
console.log("Число элементов массива "+lengthCondition(array))

function calc (numberOne,numberTwo,operand){
    if(operand == '+'){
        return numberOne + numberTwo
    }
    if(operand == '-'){
        return numberOne - numberTwo
    }
    if(operand == '*'){
        return numberOne * numberTwo
    }
    if(operand == '/'){
        return numberOne / numberTwo
    }
}
console.log(calc(10,-23,'*'))

