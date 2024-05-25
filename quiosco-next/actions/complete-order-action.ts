"use server"

import { prisma } from "@/src/lib/prisma"
import { revalidatePath } from "next/cache"

export async function completeOrder(formData: FormData) {
    const idOrder = formData.get('order_id')!
    try {
        await prisma.order.update({
            where: {
                id: +idOrder
            },
            data: {
                status: true,
                oderReadyAt: new Date(Date.now())
            }
        })
        revalidatePath('/admin/orders')
    } catch (error) {
        console.log(error)
    }

}