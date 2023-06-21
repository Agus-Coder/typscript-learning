// How to allow only a certain type in a function

interface Contacto {
    name: string,
    tel: number,
    //method inside an interface
    // clone() : Contacto
}

//The following line, we are adding types to parameters, but not into the function
function clone(source: Contacto) {
    return Object.apply({}, source)
}

// Then, we must do the following
function trueClone(source: Contacto): Contacto {
    return Object.apply({}, source)
}

const a: Contacto = {name: 'Homero Simpson', tel: 1234}
const b = trueClone(a)


// We can also add the method inside the function
