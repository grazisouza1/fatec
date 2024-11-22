//npm i express
import express from 'express'
import Pessoa from './Pessoa'

const app = express()
const port = 3000

app.get('/pessoas', (req, res)=>{
    const pessoa1 = new Pessoa('nome', 20, ['programar'])
    const pessoa2 = new Pessoa('Teste2', 25, ['a', 'b'])
    const listaPessoas = [pessoa1, pessoa2]
    res.json(listaPessoas)
})

app.listen(port, ()=>{
    console.log(`API rodando em http://localhost:${port}`)
})

//npm i -D @types/express @types/node