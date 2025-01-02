/*
  Warnings:

  - You are about to drop the column `wrongTestCaseInput` on the `Submission` table. All the data in the column will be lost.
  - You are about to drop the column `wrongTestCaseOutput` on the `Submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "wrongTestCaseInput",
DROP COLUMN "wrongTestCaseOutput",
ADD COLUMN     "expectedInput" TEXT[],
ADD COLUMN     "expectedOutput" TEXT,
ADD COLUMN     "userOuptput" TEXT;
