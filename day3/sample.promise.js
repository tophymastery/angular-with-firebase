console.log('start')

console.log('Ask A to buy Pizza')
aBuyPizza()
    .then((product, price) => {
        console.log("You got 1 " + product + " with price = " + price)

        return bBuyCoffee((product, price) => {
            console.log("You got " + product + " with price = " + price)
        })
    })
    .then((product, price) => {
        console.log("You got 2 " + product + " with price = " + price)
    })
    .then((result) => {
        console.log('Success')
    }, (err) => {
        console.log('Fail')
    })

console.log('Ask B to buy Cooffee')
bBuyCoffee((product, price) => {
    console.log("You got " + product + " with price = " + price)
})

console.log('End')

function aBuyPizza() {
    return new Promise((resolve, reject) => {
        console.log('A go out')
        setTimeout(() => {
            console.log('A got Pizza')
            resolve('pizza', 120)
        }, 5000)
    })
}

function bBuyCoffee(callback) {
    console.log('B go out')
    setTimeout(() => {
        console.log('B got Coffee')
        callback('coffee', 60)
    }, 2000)
}