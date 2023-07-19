(()=>{

    const calcTotal = (prices:number[]) :number =>{ //the second number marks the type for the return of the function
        let total = 0
        prices.forEach((item)=>{
            total += item;
        })
        return total
    }

    const rta = calcTotal([2,6,4,9]) //rta esta usando inferencia
    // la inferencia tambien existe en las funciones

    // there are functions that do not have any return

    const printTotal = (prices:number[]): void => {
        const rta = calcTotal(prices)
        console.log(`El total es ${rta}`);
        
    }

    printTotal([4,8,44,]) // a void function
})()