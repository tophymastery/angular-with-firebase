const Observable = require('rxjs').Observable

aBuyPizza()
    .subscribe((res) => {
        console.log(res)
    })

function aBuyPizza() {
    return Observable.create((o) => {
        setTimeout(() => {
            o.next('pizza')
            o.complete()
        }, 3000)
    })
}