(()=>{

    let productTitle = 'An Amazing Product'
    // cant be changed to another type

    productTitle = 'Empty title'
    console.log('product title: ', productTitle);
    
    // you can use double ticks

    const productDescription = "bla bla bla"
    console.log('Product Description: ', productDescription);
    
    // simple thick is preferred

    // then, there is the famous backtick

    const summary = `this is a backtick, my friend, the product is ${productTitle}`

    console.log('Message from summary: ', summary);
    
    // dont use String, remember, string

})()