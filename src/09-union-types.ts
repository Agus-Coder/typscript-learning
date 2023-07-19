(()=>{

    let userId: string | number;
    userId =  123;
    userId = 'ajgtu';

    // Ho can we manipulate these data but bearing in mind the type?
    // lets use functions

    function greeting(someText: string | number) {

        // TS does help us
        if (typeof someText === 'string'){
            // here inside, TS knows that the variable is a string!
            let test = someText.charAt(3)
            console.log(test);
            
        }else{
            // then, in here it will be only number type, guessed by TS
            console.log(someText.toFixed(1));
            

        }
    }
    greeting('assdfkjbltltd')
    greeting(123.8976534252)

    // what if we want the function to do different things with numbers and with strings?
})()