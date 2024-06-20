/*
  Warnings:

  - You are about to drop the column `oderReadyAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "oderReadyAt",
ADD COLUMN     "orderReadyAt" TIMESTAMP(3);
