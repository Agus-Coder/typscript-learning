(()=>{

    let prices = [1,2,3,45,76,212]

    // prices.push('asdfasdf') //you can not insert sttrings. there can be ONLY NUMBERS, because is an array that contains numbers

    prices.push(123)

    // but... what if there is more types of data? Like

    let someData = [1234, false]

    // in the tooltip, apperas for the first time, the pipe "|", an "or" operator
    // data type will be limited to the types that are in the beggining

    // someData.push("test") // not availabable

    // unless, we specify the data we want
    
    let someData2: (number | string | boolean | Object)[] = ['hola', true]

    someData2.push(123) // Perfect!
    someData2.push({})

    // Object in JS let you insert Arrays and objects...

    // lets come back to prices

    prices.map(x => x*2) // because is an array of numbers

    // REMEMBER THIS IS IMPORTANT!!!

})()