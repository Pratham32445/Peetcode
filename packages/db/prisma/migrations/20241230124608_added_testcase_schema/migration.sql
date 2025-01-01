-- CreateTable
CREATE TABLE "TestCase" (
    "Id" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "status" TEXT,
    "time" TEXT,
    "memory" TEXT,

    CONSTRAINT "TestCase_pkey" PRIMARY KEY ("Id")
);

-- AddForeignKey
ALTER TABLE "Submission" ADD CONSTRAINT "Submission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
