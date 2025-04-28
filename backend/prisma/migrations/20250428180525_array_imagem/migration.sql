/*
  Warnings:

  - The `imagem` column on the `tecnologias` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "tecnologias" DROP COLUMN "imagem",
ADD COLUMN     "imagem" TEXT[];
