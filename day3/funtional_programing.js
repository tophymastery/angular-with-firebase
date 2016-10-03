const categories = require('./catagory').models
const _ = require('lodash')

const listOfSubCategory_1 = _(categories)
    .map((models) => 
        _.map(models.subcategories,(sub) => sub.title))
    .value()

const listOfSubCategory_2 = _(categories)
    .flatMap((cat) => cat.subcategories)
    .map((subcat) => subcat.title)
    .value()

const result = _(categories)
    .flatMap((cat) => 
        _.map(cat.subcategories, (sub) => {
            return {
                cat: cat.title,
                sub: sub.title
            }
        }))
    .value()

const arr = [
    {name: 'name 1', score: [12, 75, 43]},
    {name: 'name 2', score: [77, 1, 92, 38]}
]

const result_flatmap_1 = _(arr)
    .flatMap((arr) => arr.score)
    .value()

const result_flatmap_2 = _(arr)
    .map((arr) => arr.score)
    .flatten()
    .value()

const result_map = _(arr)
    .map((key, value) => ({
        key: "Name: " + key.name + ", Score: " + key.score,
        value
    }))
    .value()

console.log(result_map)

