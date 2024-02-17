-- CreateEnum
CREATE TYPE "Role" AS ENUM ('INTERN', 'ADMIN', 'ENGINEER');

-- CreateTable
CREATE TABLE "Emploee" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Emploee_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Emploee_email_key" ON "Emploee"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Emploee_name_key" ON "Emploee"("name");
