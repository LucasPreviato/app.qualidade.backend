import { Controller, Post } from '@nestjs/common';

@Controller('api/qualilabs/laboratories')
export class LaboratoriesController {
  @Post()
  async createUpdateLaboratory() {
    return JSON.stringify({
      message: 'Laboratory created/updated successfully',
    });
  }
}
