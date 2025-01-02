/*
  Warnings:

  - Added the required column `output` to the `TestCase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "TestCase" ADD COLUMN     "Input" TEXT[],
ADD COLUMN     "output" TEXT NOT NULL;
