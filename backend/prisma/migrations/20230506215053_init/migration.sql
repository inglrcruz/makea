-- CreateTable
CREATE TABLE "users" (
    "uid" SERIAL NOT NULL,
    "device" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("uid")
);

-- CreateTable
CREATE TABLE "categories" (
    "cid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("cid")
);

-- CreateTable
CREATE TABLE "articles" (
    "aid" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "articles_pkey" PRIMARY KEY ("aid")
);

-- CreateTable
CREATE TABLE "photos" (
    "pid" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "articleId" INTEGER NOT NULL,

    CONSTRAINT "photos_pkey" PRIMARY KEY ("pid")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_device_key" ON "users"("device");

-- AddForeignKey
ALTER TABLE "articles" ADD CONSTRAINT "articles_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("cid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "photos" ADD CONSTRAINT "photos_articleId_fkey" FOREIGN KEY ("articleId") REFERENCES "articles"("aid") ON DELETE RESTRICT ON UPDATE CASCADE;
