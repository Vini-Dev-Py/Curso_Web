function tratarErros(erro) {
   // throw new Error("...")
   // throw 10
   // throw true
   // throw 'mensagem'
   throw {
       nome: erro.name,
       msg: erro.message,
       data: new Data
   }
}

function imprimeNome(obj)  {
    try {
        console.log(obj.name.toUpperCase() + "!!!")
    } 

    catch (e) {
        tratarErros(e)
    }

    finally {
        console.log("final")
    }
}

const obj = {
    nome: "Roberto"
}
imprimeNome(obj)