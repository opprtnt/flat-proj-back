/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "User";

-- CreateTable
CREATE TABLE "Flat" (
    "id" SERIAL NOT NULL,
    "floor" INTEGER NOT NULL,
    "pos_on_floor" TEXT,
    "price" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "area_total" DECIMAL(65,30) NOT NULL,
    "area_kitchen" DECIMAL(65,30) NOT NULL,
    "area_live" DECIMAL(65,30) NOT NULL,
    "layout_image" TEXT NOT NULL,

    CONSTRAINT "Flat_pkey" PRIMARY KEY ("id")
);
