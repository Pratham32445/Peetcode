/*
  Warnings:

  - You are about to drop the column `userOuptput` on the `Submission` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "userOuptput",
ADD COLUMN     "userOutput" TEXT;
