(()=>{

    let myNumber: number;
    let myString: string;

    //null and undefined, are types
    let myNull: null = null;
    let myUndefined: undefined = undefined;

    //and now, how do we use those in a variable? for example, we need that myNumber would be null
    // we use union types
    let myOtherNumber: number | null = null
    myOtherNumber = 5

    //Same with undefined
    let myOtherString: string | null = null
    myOtherString = 'works!'

    // there are frameworks whose components could be dynamic and, during a little span of time, some components
    // are null, in th ose cases, TS is waaaay useful

    function hi(name: string|null){
        let hello = 'Hello there!';
        if (name){
            hello += ` ${name}`
        }else{
            hello += ' Nobody' 
        }
        console.log(hello);
    }

    hi('August')
    hi(null)


    // it can be done easily:

    function hi2(name: string|null){
        let hello = 'Hello there! ';
        hello += name?.toLowerCase() || "Nobody" //the '?' was added automatically by TS! it is called 'Optional chaining'
        // the ? symbol validates the existence ofdata inside te name variable
        // || "Nobody" actts as a fall back value
        console.log(hello);
    }

    hi2('August')
    hi2(null)


    /*
    
    The optional chaining (?.) operator accesses an object's property or calls a function. 
    If the object accessed or function called using this operator is undefined or null, 
    the expression short circuits and evaluates to undefined instead of throwing an error.
    
    */
})()