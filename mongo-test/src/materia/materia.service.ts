import { Injectable } from '@nestjs/common';
import { CreateMateriaDto } from './dto/create-materia.dto';
import { UpdateMateriaDto } from './dto/update-materia.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Materia } from './entities/materia.entity';

@Injectable()
export class MateriaService {
  constructor(@InjectModel('Materia') private readonly materiaModel: Model<Materia>) {}
  
  async create(createMateriaDto: CreateMateriaDto) {
    return this.materiaModel.create(createMateriaDto);
  }

  async findAll() {
    return this.materiaModel.find().exec();
  }

  async findOne(id: number) {
    return this.materiaModel.findById(id).exec();
  }

  async update(id: number, updateMateriaDto: UpdateMateriaDto) {
    return this.materiaModel.findByIdAndUpdate(id, updateMateriaDto, { upsert: true, new: true }).exec();
  }

  async remove(id: number) {
    return this.materiaModel.deleteOne({ _id: id }).exec();
  }
}
