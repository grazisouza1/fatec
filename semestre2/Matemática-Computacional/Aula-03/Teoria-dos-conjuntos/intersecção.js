const a = [3, 7, 2, 9, 11, 13]
const b = [5, 2, 4, 6, 10, 11]
var uniao = a.concat(b)

var c = 0
var n = uniao.length

var IT = []
for (i = 1; i < n; i++){
    for (j = 1; j < n; j++){
        if (a[i] = b[j]){
            c++
            IT.concat(a[i])
        }
    }
}

console.log(IT)
