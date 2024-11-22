import PromptSync from "prompt-sync"

let prompt = PromptSync()
let valor = Number(prompt('Digite um número: '))
let numFinal = Number(prompt('Até que valor a tabuada deve seguir?: '))
console.log(`Segue a tabuada do número ${valor}: `)

for (let num = 0; num <= numFinal; num++){
    let valorFinal = valor * num
    console.log(`${valor} X ${num} = ${valorFinal}`)
}

console.log('Fim da tabuada!')