// ==== Type Assertion or Type Casting ==========

type One = string
type Two = string | number
type Three = 'hello'

// convert to more or less specific
let a: One = 'hello'
let b = a as Two // less specific
let c = a as Three // more specific

let d = <One>'world'  // do't work in react
let e = <string | number>'world' // do't work in react

const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add')
        return a + b
    return '' + a + b
}

let myVal: string = addOrConcat(2, 2, 'concat') as string

// Be careful! TS sees no problem - but a string is returned
let nextVal: number = addOrConcat(2, 2, 'concat') as number

// 10 as string //  not ok
(10 as unknown) as string

// The DOM

const img = document.querySelector('img')! // '!' - nut null
const myImg = document.getElementById('#img') as HTMLImageElement

img.src