//commonjs
//const prompt = require('prompt-sync')()

import PromptSync from "prompt-sync"
const prompt = PromptSync()

let valor = Number(prompt('Digite um valor: '))
let acrescimo = Number(prompt('Digite o valor da taxa: '))
let valorDesejado = valor * 3
let meses = 0

while (valor < valorDesejado){
    valor += (acrescimo * valor)
    meses++
    console.log(`Valor: ${valor} \n Meses: ${meses}`)
    console.log(' ')
}

console.log(`Após ${meses} meses, chegamos ao valor triplicado, que é de ${valor}`)

//O arquivo node_module pode acabar ficando muito grande, e por isso não subimos o mesmo para o Github. Caso precise usar o código em outra máquina, vai dar erro pela falta do module. Para resolver isso, basta usar npm i no terminal, para que seja instalada a(s) dependência(s) necessária(s)