import PromptSync from 'prompt-sync'
let prompt = PromptSync()

let binNum = {}
let decNum = Number(prompt("Digite o número para ser convertido e binário: "))

while (decNum > 0) {
    let rest = decNum % 2
    binNum += rest
}

console.log(binNum)