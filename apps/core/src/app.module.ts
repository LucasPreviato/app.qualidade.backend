import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LaboratoriesModule } from './laboratories/laboratories.module';
import { UnitsModule } from './units/units.module';
import { DepartmentsModule } from './departments/departments.module';
import { EmployeesModule } from './employees/employees.module';
import { JobCategoriesModule } from './job-categories/job-categories.module';
import { JobTitlesModule } from './job-titles/job-titles.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [
    LaboratoriesModule,
    UnitsModule,
    DepartmentsModule,
    EmployeesModule,
    JobTitlesModule,
    JobCategoriesModule,
    PrismaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
