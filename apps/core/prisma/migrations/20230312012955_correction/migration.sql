/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `departments` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `employees` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[name]` on the table `units` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `employees` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "EmployeeStatus" AS ENUM ('ACTIVE', 'EXPERIENCE', 'INACTIVE');

-- AlterTable
ALTER TABLE "employees" ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "status" "EmployeeStatus" NOT NULL DEFAULT 'EXPERIENCE';

-- CreateIndex
CREATE UNIQUE INDEX "departments_name_key" ON "departments"("name");

-- CreateIndex
CREATE UNIQUE INDEX "employees_email_key" ON "employees"("email");

-- CreateIndex
CREATE UNIQUE INDEX "units_name_key" ON "units"("name");
