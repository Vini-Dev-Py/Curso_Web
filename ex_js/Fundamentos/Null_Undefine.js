const a = {name: 'Teste'}

console.log(a)

const b = a

let c = 3

let d = c
d++
console.log(c)
console.log(d)

let valor // não iniciado
console.log(valor)

valor = null // ausência de valor
console.log(valor)
// console.log(valor.toString()) // Erro !

const produto = {}
console.log(produto.preço)
console.log(produto)

produto.preço = 3.50
console.log(produto)

produto.preço = undefined // evite atribuir undefined
console.log(!!produto.preço)
// delete produto.preço
console.log(produto)

produto.preço = null // sem preço
console.log(!!produto.preço)
console.log(produto)