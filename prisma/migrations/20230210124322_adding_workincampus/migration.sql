-- DropIndex
DROP INDEX "name";

-- AlterTable
ALTER TABLE "Lecturer" ADD COLUMN     "campusId" TEXT;

-- AddForeignKey
ALTER TABLE "Lecturer" ADD CONSTRAINT "Lecturer_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
