const a = [3, 7, 2, 9, 11, 13]
const b = [5, 2, 4, 6, 10, 11]

const uniao = a.concat(b)
console.log(`Vetor antes da classificação: ${uniao}`)

function classificar(){
    for (i = 1; i < uniao.length; i++){
        for (j = i + 1; j < uniao.length; j++){
            if (uniao[i] > uniao[j]){
                temp = uniao[i]
                uniao[i] = uniao[j]
                uniao[j] = uniao[i]
            } 
        }
    }
}

classificar()
console.log(`Vetor depois da classificação: ${uniao}`)