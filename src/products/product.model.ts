export type Sizes = 's' | 'm' | 'l' | 'xl';

export type Product = {
    name:string,
    createdAt: Date,
    stock: number,
    size?: Sizes
};

