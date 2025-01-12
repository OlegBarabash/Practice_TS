// ======== Type Aliases ========


interface Guitarist {
    name: string,
    active?: boolean, // ? - optional field
    albums: (string | number)[]
}
