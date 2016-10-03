const _ = require('lodash')

function getAddFunction (x) {
    return function (y) {
        return x + y
    }
}

const addBy2 = getAddFunction(2)
console.log(addBy2(10))

const getAddFunction2 = (x) => (y) => x + y

const addBy5 = getAddFunction2(5)
console.log(addBy5(9))

// ==========================
console.log("==========================")



// ==========================
console.log("==========================")

const library = require('./data')

const names = library
    .filter((track) => track.Year < 2010)
    .map((track) => track.Name)

const names2 = library
    .map((track) => track.Artist)

const result = _(library)
    .map((track) => track.Artist)
    .uniq()
    .value()

const result2 = _(library)
    .groupBy((track) => track.Album)
    .map((tracks, name) => {
        return {
            Album: name,
            Artists: _(tracks)
                .map((tracks) => tracks.Artist)
                .uniq()
                .value()
        }
    })
    .uniq()
    .value()