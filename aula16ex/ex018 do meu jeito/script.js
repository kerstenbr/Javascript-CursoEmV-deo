var array = []
let numArray = document.getElementById("txtn").value
let select = document.getElementById("selArray")
let div = document.getElementById("dados")

function addArray(){
    if (numArray < 1 || numArray > 100){
        alert("Nenhum valor para inserir")
    } else {
        array.push(numArray)
        let item = document.createElement("option")
        item.text = `Valor ${numArray} adicionado ao array`
        select.appendChild(item)
    }
    return array
}

function gerarDados(){
    if (array.length == 0){
        alert("Nenhum valor dentro do array")
    } else {
        div.innerHTML = ''

        let p1 = document.createElement("p")
        p1.innerHTML = `Ao todo, temos ${array.length} números cadastrados no array`
        div.appendChild(p1)

        let p2 = document.createElement("p")
        p2.innerHTML = `O maior valor informado foi ${Math.max.apply(null, array)}`
        div.appendChild(p2)

        let p3 = document.createElement("p")
        p3.innerHTML = `O menor valor informado foi ${Math.min.apply(null, array)}`
        div.appendChild(p3)

        let p4 = document.createElement("p")
        p4.innerHTML = `err`
        div.appendChild(p4)

        let p5 = document.createElement("p")
        p5.innerHTML = `err`
        div.appendChild(p5)
    }
    
    
}