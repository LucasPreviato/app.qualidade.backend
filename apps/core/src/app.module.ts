import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompaniesModule } from './companies/companies.module';
import { JobCategoriesModule } from './job-categories/job-categories.module';
import { JobTitlesModule } from './job-titles/job-titles.module';
import { JobtitlesModule } from './jobtitles/jobtitles.module';
import { EmployeesModule } from './employees/employees.module';
import { DepartmentsModule } from './departments/departments.module';
import { LaboratoriesModule } from './laboratories/laboratories.module';
import { UnitsModule } from './units/units.module';
import { CompaniesModule } from './companies/companies.module';

@Module({
  imports: [CompaniesModule, UnitsModule, LaboratoriesModule, DepartmentsModule, EmployeesModule, JobtitlesModule, JobTitlesModule, JobCategoriesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
