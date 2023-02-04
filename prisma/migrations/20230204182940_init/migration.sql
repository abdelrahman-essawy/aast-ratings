-- CreateTable
CREATE TABLE "Campus" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Campus_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "College" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "College_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Lecturer" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "personalSideRating" INTEGER NOT NULL DEFAULT 0,
    "scientificSideRating" INTEGER NOT NULL DEFAULT 0,
    "recommendationRating" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Lecturer_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "courseCode" TEXT,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "personalSideRating" INTEGER DEFAULT 0,
    "scientificSideRating" INTEGER DEFAULT 0,
    "recommendationRating" INTEGER DEFAULT 0,
    "comment" TEXT,
    "campusId" TEXT,
    "collegeId" TEXT,
    "lecturerId" TEXT,
    "courseId" TEXT,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CampusToCollege" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CollegeToLecturer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CollegeToCourse" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_CourseToLecturer" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Campus_id_key" ON "Campus"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Campus_name_key" ON "Campus"("name");

-- CreateIndex
CREATE UNIQUE INDEX "College_id_key" ON "College"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Lecturer_id_key" ON "Lecturer"("id");

-- CreateIndex
CREATE INDEX "name" ON "Lecturer"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Course_id_key" ON "Course"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Course_name_key" ON "Course"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Course_courseCode_key" ON "Course"("courseCode");

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");

-- CreateIndex
CREATE UNIQUE INDEX "_CampusToCollege_AB_unique" ON "_CampusToCollege"("A", "B");

-- CreateIndex
CREATE INDEX "_CampusToCollege_B_index" ON "_CampusToCollege"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CollegeToLecturer_AB_unique" ON "_CollegeToLecturer"("A", "B");

-- CreateIndex
CREATE INDEX "_CollegeToLecturer_B_index" ON "_CollegeToLecturer"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CollegeToCourse_AB_unique" ON "_CollegeToCourse"("A", "B");

-- CreateIndex
CREATE INDEX "_CollegeToCourse_B_index" ON "_CollegeToCourse"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CourseToLecturer_AB_unique" ON "_CourseToLecturer"("A", "B");

-- CreateIndex
CREATE INDEX "_CourseToLecturer_B_index" ON "_CourseToLecturer"("B");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_campusId_fkey" FOREIGN KEY ("campusId") REFERENCES "Campus"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_lecturerId_fkey" FOREIGN KEY ("lecturerId") REFERENCES "Lecturer"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_courseId_fkey" FOREIGN KEY ("courseId") REFERENCES "Course"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampusToCollege" ADD CONSTRAINT "_CampusToCollege_A_fkey" FOREIGN KEY ("A") REFERENCES "Campus"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CampusToCollege" ADD CONSTRAINT "_CampusToCollege_B_fkey" FOREIGN KEY ("B") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToLecturer" ADD CONSTRAINT "_CollegeToLecturer_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToLecturer" ADD CONSTRAINT "_CollegeToLecturer_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToCourse" ADD CONSTRAINT "_CollegeToCourse_A_fkey" FOREIGN KEY ("A") REFERENCES "College"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CollegeToCourse" ADD CONSTRAINT "_CollegeToCourse_B_fkey" FOREIGN KEY ("B") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToLecturer" ADD CONSTRAINT "_CourseToLecturer_A_fkey" FOREIGN KEY ("A") REFERENCES "Course"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CourseToLecturer" ADD CONSTRAINT "_CourseToLecturer_B_fkey" FOREIGN KEY ("B") REFERENCES "Lecturer"("id") ON DELETE CASCADE ON UPDATE CASCADE;
