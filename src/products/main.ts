import {createProduct, calculateStock, products} from './product.service'

createProduct({
    name: 'Product 1',
    createdAt: new Date(),
    stock: 40,
    size: 'm'
});

createProduct({
    name: 'Product 2',
    createdAt: new Date(),
    stock: 40,
    size: 's'
});

console.log(products);


const total = calculateStock();
console.log(total);
