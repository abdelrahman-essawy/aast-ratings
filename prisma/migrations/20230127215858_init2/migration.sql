/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `College` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");
