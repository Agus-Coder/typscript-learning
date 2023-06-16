// Generics

// In the following function, the return statement does specifies any type
// we supplied a specificic input and return type, but in the specific function, there is nothing specific about contact at all, it is a generic function
//basically, we can replace the types with other types

// before
function beforeClone(source: Contacto): Contacto {
    return Object.apply({}, source)
}

// After
function afterClone<T>(source: T): T {
    return Object.apply({}, source)
}

// and more

function generics<T1,T2>(source:T1): T2{
    return
}