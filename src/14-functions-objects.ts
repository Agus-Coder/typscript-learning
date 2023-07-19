(()=>{

    const login = (email: string, pass: string) =>{
        console.log(email, pass);
    }
    
    login('August', 'asdfg')

    //But, i would be easy if we could send an object with all properties

    const trueLogin = (data: {email:string, pass: string}) => {
        console.log(data.email, data.pass);
    }

    trueLogin({email:'a mail', pass:'something hard to guess'})

    // -------------- //

    type Sizes = 's' | 'm' | 'l' | 'xl';

    const products: any[] = []; //just for now

    const addProduct = (data: {
        title:string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }) => {
        products.push(data)
    }

    addProduct({
        title: 'this is the title',
        createdAt: new Date(),
        stock: 13,
        size: 's'
    });
    
    console.log(products);
    
})()