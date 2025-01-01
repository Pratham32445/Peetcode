/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `TestCase` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "TestCase_token_key" ON "TestCase"("token");
