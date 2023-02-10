/*
  Warnings:

  - You are about to drop the column `amoubtOfReviews` on the `Lecturer` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Lecturer" DROP COLUMN "amoubtOfReviews",
ADD COLUMN     "amountOfReviews" INTEGER NOT NULL DEFAULT 0;
