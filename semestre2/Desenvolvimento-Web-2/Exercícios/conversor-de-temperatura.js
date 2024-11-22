import PromptSync from 'prompt-sync'
const prompt = PromptSync()

const c = prompt("Insira uma temperatura em Celsius: ")

function cToF(cel){
    let fah = (cel * 9 / 5) + 32
    return `A tem peratura inserida, em Fahrenheit, é equivalente à: ${fah}°F`
}

console.log(cToF(c))