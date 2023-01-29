/*
  Warnings:

  - Made the column `personalSideRating` on table `Lecturer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `recommendationRating` on table `Lecturer` required. This step will fail if there are existing NULL values in that column.
  - Made the column `scientificSideRating` on table `Lecturer` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Campus" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "College" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Lecturer" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ALTER COLUMN "personalSideRating" SET NOT NULL,
ALTER COLUMN "personalSideRating" SET DEFAULT 0,
ALTER COLUMN "recommendationRating" SET NOT NULL,
ALTER COLUMN "recommendationRating" SET DEFAULT 0,
ALTER COLUMN "scientificSideRating" SET NOT NULL,
ALTER COLUMN "scientificSideRating" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "personalSideRating" INTEGER DEFAULT 0,
ADD COLUMN     "recommendationRating" INTEGER DEFAULT 0,
ADD COLUMN     "scientificSideRating" INTEGER DEFAULT 0,
ALTER COLUMN "rating" SET DEFAULT 0;

-- CreateIndex
CREATE INDEX "name" ON "Lecturer"("name");
