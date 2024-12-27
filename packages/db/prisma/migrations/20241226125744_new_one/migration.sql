-- DropForeignKey
ALTER TABLE "Question" DROP CONSTRAINT "Question_userId_fkey";

-- CreateTable
CREATE TABLE "UserOnJunction" (
    "Id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "questionId" TEXT NOT NULL,

    CONSTRAINT "UserOnJunction_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "UserOnJunction" ADD CONSTRAINT "UserOnJunction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserOnJunction" ADD CONSTRAINT "UserOnJunction_questionId_fkey" FOREIGN KEY ("questionId") REFERENCES "Question"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
