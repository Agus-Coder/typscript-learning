(()=>{

    // Alias
    type UserId = number | string | boolean; //Reserved word for TS, there is no ":", this is an alias

    // in this lesson, we want to avoid any redundance about delcaring over and over again the types for a variable, for example:

    let userId: UserId;

    function example(userId: UserId){
        // do something
    }

    // We would had to describe two times all the types for the userId variable, which can become a headache

    // Literal types
    let shirtSize : string;
    shirtSize = 'S';
    shirtSize = 'M';
    shirtSize = 'L';
    shirtSize = 'XL';

    // we can write anything, there is a way to do it more easily:

    let socketSizes: 's' | 'm' | 'l' | 'xl'
    // it comes in handy!
    // and then
    socketSizes = ';lkjhsdafha' //Mistake! TS is waringyou

    //even better
    type Sizes = 's' | 'm' | 'l' | 'xl'
    let pantSizes : Sizes

    function greetings(userId: UserId, size: Sizes){
        // do something
    }

    greetings('asdf','m')

})()

