let num = [5,8,2]
num.push(4)
console.log(`O vetor tem ${num.length} elementos`)
console.log(`Sendo eles: ${num}`)
console.log(`Primeiro elemento ${num[0]}`)
console.log(`Em ordem crescente ${num.sort()}`)
console.log(`Primeiro elemento agora que está em ordem ${num[1]}`)

let buscado = 8
let pos = num.indexOf(buscado)
if (pos == -1){
    console.log(`Valor ${buscado} não encontrado`)
} else {
    console.log(`O valor ${buscado} está na posição ${pos}`)
}

// for(let pos = 0; pos < num.length; pos++){
//     console.log(`A posição ${pos} tem o valor ${num[pos]}`)
// } 