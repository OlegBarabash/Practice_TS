let stringArr = ['one', 'hey', 'Dave']

let guitars = ['Strat', 'Les Pal', 5150]

let mixedData = ['EVH', 1984, true]

stringArr[0] = 'John'
stringArr.push('hey')

guitars[0] = 1984
guitars.unshift('Jim')

guitars = stringArr
// stringArr = guitars // not ok
mixedData = guitars
// guitars = mixedData  // not ok

let test = []
let bands: string[] = []
bands.push('Van Halen')



// ======Tuple==========

let myTuple: [string, number, boolean] = ['Oleg', 35, true]

let mixed = ['John', 1, true]

// myTuple = mixed // not ok
mixed = myTuple // ok
// myTuple[3] = 33 // not ok
// myTuple[2] = 33 // not ok
myTuple[1] = 33 // ok


// ========= Object =========

let myObj: object
myObj = []
console.log(typeof myObj);
myObj = bands
myObj = {}

const exampleObj = {
    prop1: 'Dave',
    prop2: true,
}

// exampleObj.prop1 = 42 // not ok
exampleObj.prop1 = 'Oleg'


// ============== type & interface ==========

// type Guitarist = {
//     name: string,
//     active?: boolean, // ? - optional field
//     albums: (string | number)[]
// }

//   OR

interface Guitarist {
    name: string,
    active?: boolean, // ? - optional field
    albums: (string | number)[]
}

let evh: Guitarist = {
    name: 'Eddie',
    active: false,
    albums: [1989, 5156, 'OU812']
}

let jp: Guitarist = {
    name: 'Jimmy',
    active: true,
    albums: ['I', 'II', 'IV']
}

evh = jp // ok
// evh.years = 40 // not ok


// ======== functions =============

const greetGuitarist = (guitarist: Guitarist) => {
    return `Hello ${guitarist.name}!`
}

console.log(greetGuitarist(jp));


// ========= Enums =======

enum Grade {
    U = 1,
    D,
    C,
    B,
    A,
}

console.log(Grade.A);