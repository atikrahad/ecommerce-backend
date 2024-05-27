
//===========variants input types=============
export type TVariants = {
    type: string,
    value: string
}

//===========inventory input types=============
export type TInventory = {
    quantity: number,
    inStock: boolean
}

//===========products input types=============
export type TProduct = {
    name: string,
    description: string,
    price: number,
    category: string,
    tags: string[],
    variants: TVariants[],
    inventory: TInventory
}