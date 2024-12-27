/*
  Warnings:

  - You are about to drop the column `userId` on the `Question` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_problemdiscussionId_fkey";

-- AlterTable
ALTER TABLE "Question" DROP COLUMN "userId",
ALTER COLUMN "problemdiscussionId" DROP NOT NULL,
ALTER COLUMN "Editorial" DROP NOT NULL,
ALTER COLUMN "Editorial" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "Question" ADD CONSTRAINT "Question_problemdiscussionId_fkey" FOREIGN KEY ("problemdiscussionId") REFERENCES "ProblemDiscussion"("Id") ON DELETE SET NULL ON UPDATE CASCADE;
