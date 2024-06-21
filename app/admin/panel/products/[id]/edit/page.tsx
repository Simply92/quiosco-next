import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import GoBackButton from "@/components/ui/GoBackButton"
import Heading from "@/components/ui/Heading"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"

async function getProductsById(id: number) {
    const products = await prisma.product.findUnique({
        where: {
            id
        }
    })
    if (!products) {
        notFound()
    }
    return products
}

const EditProductsPage = async ({ params }: { params: { id: string } }) => {
    const product = await getProductsById(+params.id)
    return (
        <>
            <Heading>Editar Producto: {product.name}</Heading>

            <GoBackButton />

            <EditProductForm>
                <ProductForm
                    product={product} />
            </EditProductForm>
        </>
    )
}

export default EditProductsPage
