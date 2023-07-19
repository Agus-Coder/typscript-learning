(()=>{

    let isEnable = true
    // isEnable = 'asdf' warning!

    let isNew: boolean = false
    console.log('is new? ',isNew);

    const random = Math.random()
    console.log('random: ', random);

    isNew = random >= 0.5 ? true: false; //both options must be a boolean values

    console.log('is new? ',isNew);

    // do not use Boolean, use boolean

    
    
})()