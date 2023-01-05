-- CreateEnum
CREATE TYPE "TypeOfAnswerQuestion" AS ENUM ('OBJECTIVE', 'MULTIPLE_CHOICE');

-- CreateTable
CREATE TABLE "Provider" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "nickname" TEXT,
    "cnpj" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "critical" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" BOOLEAN NOT NULL DEFAULT true,
    "providerCategoryId" INTEGER NOT NULL,

    CONSTRAINT "Provider_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProviderCategory" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "requiredInitialQualification" BOOLEAN NOT NULL DEFAULT false,
    "requiredPeriodicQualification" BOOLEAN NOT NULL DEFAULT false,
    "periodicCheck" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ProviderCategory_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "QuestionsInitalQualification" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "typeOfAnswerQuestion" "TypeOfAnswerQuestion" NOT NULL DEFAULT 'OBJECTIVE',
    "providerCategoryId" INTEGER NOT NULL,

    CONSTRAINT "QuestionsInitalQualification_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Provider_name_key" ON "Provider"("name");

-- CreateIndex
CREATE UNIQUE INDEX "ProviderCategory_name_key" ON "ProviderCategory"("name");

-- AddForeignKey
ALTER TABLE "Provider" ADD CONSTRAINT "Provider_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "ProviderCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "QuestionsInitalQualification" ADD CONSTRAINT "QuestionsInitalQualification_providerCategoryId_fkey" FOREIGN KEY ("providerCategoryId") REFERENCES "ProviderCategory"("id") ON DELETE CASCADE ON UPDATE CASCADE;
