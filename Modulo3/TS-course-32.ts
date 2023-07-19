// keyof
// is a keyword in TypeScript which is used to extract the key type from an object type.

interface Flavor {
    name: string,
    color: string,
    value: number
}

type aFieldFromFlavor = keyof Flavor

// it extracts a selected field from flavor
let someField : aFieldFromFlavor = "value"

// example of use

function getValue(source, keyValue: keyof Flavor){
    return source[keyValue]
}

let chocolate : Flavor = {
    name:"chocolate",
    color: "dark Brown",
    value: 23
}

let value = getValue(chocolate,"name")

// lets empower that function!

function getValueWithPower<T>(source: T, keyValue: keyof T){
    return source[keyValue]
}