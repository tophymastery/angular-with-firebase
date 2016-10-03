const _ = require('lodash')
const library = require('./data')

// HOME WORK


// คนร้องแต่ละคน ร้องเพลงเฉลี่ยกี่วินาที

const ans1_0 = _(library)
    .groupBy((track) => track.Artist)
    .map((artists, name) => {
        return {
            Artist: name,
            Average_Song_Time: _(artists)
                .map((artist) => artist['Total Time'])
                .mean()
        }
    })
    .uniq()
    .value()

const ans1_1 = _(library)
    .groupBy((track) => track.Artist)
    .map((artists, name) => {
        return {
            Artist: name,
            Average_Song_Time: _(artists)
                .map((artist) => artist['Total Time'])
                .value()
                .reduce((a,m,i,p) => {
                    return a + m/p.length;
                },0)      
        }
    })
    .uniq()
    .value()

console.log(ans1_0)

//คนร้องแต่ละคน เริ่มร้องเพลงปีไหน

const ans2 = _(library)
    .groupBy((track) => track.Artist)
    .map((artists, name) => {
        return {
            Artist: name,
            Year: _(artists)
                .map((artist) => artist['Year'])
                .min()
        }
    })
    .uniq()
    .value()

// console.log(ans2)

//เพลงแต่ละประเภทมีกี่เพลง

const ans3 = _(library)
    .groupBy((track) => track.Genre)
    .map((genres, Genre) => {
        return {
            Genre: Genre,
            TotalSongs: _(genres)
                .map((genre) => genre)
                .size()
        }
    })
    .uniq()
    .value()

// console.log(ans3)

// [
//     {   Album: ‘Extra Terrestrial Biological Entities’,
//         Tracks: [ 1107, 1169, 1193, 1233, 1255, 1263, 1311, 1339, 1361, 1383, 1385, 1397 ],
//         Artists: [ 'EGOIST' ]
//     }
// ]

const ans4 = _(library)
    .groupBy((track) => track.Album)
    .map((tracks, Album) => {
        return {
            Album: Album,
            Tracks: _(tracks)
                .map((track) => track['Track ID'])
                .uniq()
                .value(),
            Artists: _(tracks)
                .map((track) => track['Artist'])
                .uniq()
                .value()
        }
    })
    .uniq()
    .value()

// console.log(ans4)