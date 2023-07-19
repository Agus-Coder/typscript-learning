(()=>{
    type Sizes = 's' | 'm' | 'l' | 'xl'

    function createProductToJson(
        title:string,
        createdAt: Date,
        stock: number,
        size: Sizes
    ){
        return{
            title,
            createdAt,
            stock,
            size
        }
    }

    const producto1 = createProductToJson('P1', new Date(), 12, 'xl');

    console.log(producto1);
    console.log(producto1.createdAt);
    console.log(producto1.title);

    
    
    const createProductToJsonV2 = (
        title:string,
        createdAt: Date,
        stock: number,
        size?: Sizes // ? operator marks this as an optional input
    ) => {
        return{
            title,
            createdAt,
            stock,
            size
        }
    }



})()