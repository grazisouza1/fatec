const a = [3, 7, 2, 9, 11, 13]
const b = [5, 2, 4, 6, 10, 11]

const uniao = a.concat(b)
console.log(`Vetor antes da classificação: ${uniao}`)

function classificar(){
    for (i = 0; i < uniao.length; i++){
        for (j = 0; j < uniao.length; j++){
            if (uniao[i] < uniao[j]){
                let temp = uniao[i]
                uniao[i] = uniao[j]
                uniao[j] = temp
            } 
        }
    }
}

classificar()
console.log(`Vetor depois da classificação: ${uniao}`)