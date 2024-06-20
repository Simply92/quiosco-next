"use client"

import { Product } from "@prisma/client"
import { useStore } from "@/src/store"

type AddProductProps = {
    product: Product
}

const AddProduct = ({ product }: AddProductProps) => {
    const { addToCart } = useStore()
    return (
        <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer"
            onClick={() => addToCart(product)}
        >Agregar</button>
    )
}

export default AddProduct
