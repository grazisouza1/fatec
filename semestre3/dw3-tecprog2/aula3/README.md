1. npm init -y
2. npm i -D typescript jest ts-jest @jest/globals
3. npx tsc --init
4. nx ts-jest config:init
5. Ajustar package.json:
"script": {
    "test": "jest"    
} 
6. npm i express@next
7. npm i -D @types/express @types/node

Depois de rodar na porta 3000, ao acessar localhost:3000, não aparece nada. A url /verifica-cep/12345678 tem que ser escrita manualmente.