console.log('Olá mundo')

const a = 10
let  b = 20

const total = a + b
console.log(total)

if (total > 30){
    console.log('Total > 30')
} else{
    console.log('Total <= 30')
}

const dia = 'Segunda'

switch(dia.toLowerCase()){
    case 'segunda':
        console.log('Aberto')
        break
    case 'sábado':
        console.log('Fechado')
        break;
    default:
        console.log('Meio aberto')
        break;
} 

const idade = 18
const podeBeber = idade >= 18 ? 'Pode beber!' : 'Não pode beber'
console.log(podeBeber)

const maiorDeIdade = true
const temCarteiraTrabalho = false
const podeTrabalhar = maiorDeIdade && temCarteiraTrabalho ? 'Pode trabalhar' : 'Não pode trabalhar'
console.log(podeTrabalhar)

for (let i = 0; i <= 10; i++) {
    console.log(i)
} // A primeira parte do for, serve para a declaração de parâmetros. A segunda parte é usada para decidir até quando o código vai rodar. E a última parte, serve para dizer O QUE o parâmetro fará enquanto o código estiver rodando


