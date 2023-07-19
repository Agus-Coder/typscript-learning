(()=> {

//No puedo declarar las mismas variables en este archivo

// TS nos dice "Esas variables ya las definiste en otro archivo"

let myProductName = 'test';

// para eliminar esto, lo que se debe hacer es limitar el alcance de cada variable

// A priori, lo que se hace es crear una funcion anonima autoejecutada, con esto desaparecen todos lo errores de tipeo


})();


// ASI tenes un scope encerrado