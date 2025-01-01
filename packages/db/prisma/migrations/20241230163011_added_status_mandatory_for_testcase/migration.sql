/*
  Warnings:

  - Made the column `status` on table `TestCase` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "TestCase" ALTER COLUMN "status" SET NOT NULL;
