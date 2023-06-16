// How to allow only a certain type in a function

interface Contacto {
    name: string,
    tel: number
}

function clone(source: Contacto) {
    return Object.apply({}, source)
}

// simply adding :Contact will restrict the type of the parameter