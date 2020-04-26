// par Nome/Valor
const saudação = 'Opa' // contexto Lexico 1

function exec() {
    const saudação = 'Falaaa' // contexto Lexico 2
    return saudação
}

// Objetos são grupos aninhados de pares nomes/valores
const cliente = {
    nome: 'Pedro', 
    idade: 32,
    peso: 98,
    endereço: {
        cidade: 'New York',
        numero: 123
    }
}

console.log(saudação)
console.log(exec())
console.log(cliente)