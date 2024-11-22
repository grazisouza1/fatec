const averageTemp = []
averageTemp[0] = 31.9
averageTemp[1] = 35.3
averageTemp[2] = 42.4
averageTemp[3] = 52 
averageTemp[4] = 60.8
let daysOfWeek = []
let diasDaSemana = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

console.log(diasDaSemana.length)

for (let i = 0; i <= diasDaSemana.length; i++){
    console.log(i, diasDaSemana[i])
}

console.log(diasDaSemana)

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

numbers[numbers.length] = 10
numbers.push(11) //Adiciona elementos no final
numbers.push(12, 13)


numbers.unshift(-1) //Adiciona elementos na parte da frente
numbers.unshift(-4, -3)


numbers.pop() //Sempre remove o último elemento do Array
numbers.shift() //Remove o primeiro elemento do vetor

numbers.splice(5, 3) //A partir do índice 5, 3 números serão removidos
numbers.splice(5, 0, 3, 4) //Como mostrado, queremos remover 0 elementos, então os próximos elementos mostrados serão adicionados

console.log(numbers)
console.log(averageTemp)