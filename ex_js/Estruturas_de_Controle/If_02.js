function teste1(num) {
    if(num > 7)
        console.log(num)

    console.log('final')
}

teste1(6)
teste1(7)

function teste2(num) {
    if(num > 7); { // cuidado com o ;
        console.log(num)
    }
}

teste2(6)
teste2(7)