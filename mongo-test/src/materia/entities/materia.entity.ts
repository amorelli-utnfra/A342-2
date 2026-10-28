import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';

@Schema()
export class Materia {

    @Prop({ required: true })
    codigo: number;
    @Prop({ required: true })
    nombre: string;

}

export const MateriaSchema = SchemaFactory.createForClass(Materia);
