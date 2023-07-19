(()=>{

    type Sizes = 's' | 'm' | 'l' | 'xl';

    // this, THIS is the way we do create type for objects:
    type Product = {
        title:string,
        createdAt: Date,
        stock: number,
        size?: Sizes
    }

    // before
    // const products: any[] = []; //just for now

    // After:
    const products: Product[] = [] // that is!

    const addProduct = (data: Product) => {
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