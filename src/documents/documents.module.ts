import { Module } from '@nestjs/common'
import { DocumentsService } from './documents.service'
import { DocumentsResolver } from './documents.resolver'
import { DocumentsRepository } from './repositories/documents-repository'
import { PrismaDocumentsRepository } from './repositories/prisma/prisma-documents-repository'

@Module({
  providers: [
    DocumentsResolver,
    DocumentsService,
    {
      provide: DocumentsRepository,
      useClass: PrismaDocumentsRepository,
    },
  ],
})
export class DocumentsModule {}
