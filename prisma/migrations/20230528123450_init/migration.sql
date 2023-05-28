-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "floor" INTEGER NOT NULL,
    "pos_on_floor" TEXT,
    "price" INTEGER NOT NULL,
    "rooms" INTEGER NOT NULL,
    "area_total" DECIMAL(65,30) NOT NULL,
    "area_kitchen" DECIMAL(65,30) NOT NULL,
    "area_live" DECIMAL(65,30) NOT NULL,
    "layout_image" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
