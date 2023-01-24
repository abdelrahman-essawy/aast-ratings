/*
  Warnings:

  - You are about to drop the column `owerId` on the `Course` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[ownerId,name]` on the table `Course` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `ownerId` to the `Course` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_owerId_fkey";

-- DropIndex
DROP INDEX "Course_owerId_name_key";

-- AlterTable
ALTER TABLE "Course" DROP COLUMN "owerId",
ADD COLUMN     "ownerId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Course_ownerId_name_key" ON "Course"("ownerId", "name");

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Lecturer"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
