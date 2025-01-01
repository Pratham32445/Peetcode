-- AlterTable
ALTER TABLE "Submission" ADD COLUMN     "memoryUsed" INTEGER NOT NULL DEFAULT -1,
ADD COLUMN     "testCaseLength" INTEGER,
ADD COLUMN     "wrongTestCaseLength" INTEGER;
