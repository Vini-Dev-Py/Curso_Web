function compras (trab1, trab2) {
    const comprar_Sorvete = trab1 || trab2
    const comprar_TV50 = trab1 && trab2
    // const comprar_TV32 = !!(trab1 ^ trab2)
    const comprar_TV32 = trab1 != trab2
    const saude = !comprar_Sorvete // op unario

    return {
        comprar_Sorvete,
        comprar_TV50,
        comprar_TV32,
        saude
    }
}

console.log(compras(true, true))
console.log(compras(true, true))
console.log(compras(false, true))
console.log(compras(false, false))