const person = {
    firstName: 'Ivan',
    lastName: 'Manohin',
    age: 21,
    role: 'student',
    sayHello(name){
        console.log(`Hello ${name}!`)
    }
}
console.log(person.firstName)
person.sayHello('Robin')

const users = [
    {
        firstName: 'Alex',
        role: 'user'
    },
    {
        firstName: 'Ivan',
        role: 'user'
    },
    {
        firstName: 'Pavel',
        role: 'admin'
    },
    {
        firstName: 'Andrey',
        role: 'user'
    },
    {
        firstName: 'Max',
        role: 'admin'
    },
    {
        firstName: 'Peter',
        role: 'user'
    },
    {
        firstName: 'Denis',
        role: 'user'
    },
]
let usualUsers = 0
for(let i = 0; i < users.length; i++){
    if(users[i].role === 'user'){
        usualUsers ++
    }
}
console.log(`Количество обычных пользователей ${usualUsers}`)
