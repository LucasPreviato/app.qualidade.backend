import { Injectable } from '@nestjs/common'
import { CreateEquipamentInput } from './dto/create-equipament.input'
import { UpdateEquipamentInput } from './dto/update-equipament.input'

@Injectable()
export class EquipamentsService {
  create(createEquipamentInput: CreateEquipamentInput) {
    return 'This action adds a new equipament'
  }

  findAll() {
    return `This action returns all equipaments`
  }

  findOne(id: number) {
    return `This action returns a #${id} equipament`
  }

  update(id: number, updateEquipamentInput: UpdateEquipamentInput) {
    return `This action updates a #${id} equipament`
  }

  remove(id: number) {
    return `This action removes a #${id} equipament`
  }
}
