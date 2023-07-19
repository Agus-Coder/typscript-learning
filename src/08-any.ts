(()=>{

    let myDinamicVar: any; //we are in javascript again!

    // it is recommended to NOT use any, it is a bad practice

    // we use any for a incremental project, where we are applying TS from JS

    // there are libraries that aren't typed, so we can use any

    myDinamicVar = 'test'
    const rta = (myDinamicVar as string).toLowerCase() // a little cheating!

    myDinamicVar = 123
    const rta2 = (<number>myDinamicVar).toFixed() // a little cheating for number typing!


})()