/*
  Warnings:

  - The `time` column on the `Submission` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Submission" DROP COLUMN "time",
ADD COLUMN     "time" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "memoryUsed" SET DEFAULT 0;
