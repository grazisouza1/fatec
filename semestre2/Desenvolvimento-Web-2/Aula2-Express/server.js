import express from 'express'
const app = express()
const port = 3000

app.use(express.json())

app.get('/',(requisacao,resposta)=>{
    resposta.send('Olá mundo!')
})
app.get('/teste',(requisacao,resposta)=>{
    var valor = 3
    var tabfinal = ''
    for (let num = 1; num <= 10; num++){
        tabfinal += `${valor} X ${num} = ${valor * num}<br>`
    }
    resposta.send(tabfinal)
})
// node server.js - rodar a API
app.listen(port, ()=>{
    console.log(`API Rodando em http://localhost:${port}`)
})