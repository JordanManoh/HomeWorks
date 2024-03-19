const name = 'Alex'

function greetingUser(name){
    return `Hello ${name}`
}
console.log(greetingUser(name))

const array = [6, 3, 29, 59, 83, 58, 10, 53, 40, 95, 24, 74, 34, 8, 2, 48, 4, 17, 93, 96, 52]

function searchMoreTen(mass){
    console.log(`Элементы массива больше 10:`)
    for(i = 0; i < mass.length; i++){
        if(mass[i] > 10){
            console.log(mass[i])
        }
    }
}
searchMoreTen(array)

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

