const Rxjs = require('rxjs')

// sample 1
const ob = Rxjs.Observable.create((o) => {
    o.next(1)
    o.next(2)
    o.next(3)
    o.next(4)
    o.error('err')
    o.next(5)
    o.complete()
    return () => {
        console.log('dispose')
    }
})

const q = ob.subscribe(
    (x) => {
        console.log(x)

    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('conplete')
    }
)

setTimeout(() => {
    q.unsubscribe()
}, 2000)


// sample 2
const ob2 = Rxjs.Observable.from([1, 2, 3, 4, 5])

const q2 = ob2.subscribe(
    (x) => {
        console.log(x)
    },
    (err) => {
        console.log(err)
    },
    () => {
        console.log('conplete')
    })