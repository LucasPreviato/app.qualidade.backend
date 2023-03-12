/*
  Warnings:

  - The primary key for the `laboratories` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Made the column `laboratoryId` on table `units` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "departments" DROP CONSTRAINT "departments_unitId_fkey";

-- DropForeignKey
ALTER TABLE "units" DROP CONSTRAINT "units_laboratoryId_fkey";

-- AlterTable
ALTER TABLE "departments" ALTER COLUMN "unitId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "laboratories" DROP CONSTRAINT "laboratories_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "laboratories_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "laboratories_id_seq";

-- AlterTable
ALTER TABLE "units" ALTER COLUMN "laboratoryId" SET NOT NULL,
ALTER COLUMN "laboratoryId" SET DATA TYPE TEXT;

-- CreateTable
CREATE TABLE "employee_documents" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "url" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "employeeId" INTEGER NOT NULL,

    CONSTRAINT "employee_documents_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "employee_documents_name_key" ON "employee_documents"("name");

-- AddForeignKey
ALTER TABLE "units" ADD CONSTRAINT "units_laboratoryId_fkey" FOREIGN KEY ("laboratoryId") REFERENCES "laboratories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "departments" ADD CONSTRAINT "departments_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "units"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "employee_documents" ADD CONSTRAINT "employee_documents_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "employees"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
