import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Prop } from '@nestjs/mongoose';
import mongoose from 'mongoose';


@Schema()
export class Alumno {
    @Prop({ required: true })
    nombre: string;

    @Prop({default: 'sin apellido'})
    apellido: string;

    @Prop({ required: [true, 'La edad es obligatoria'] })
    edad: number;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Materia' })
    materias: mongoose.Types.ObjectId[];


}

export const AlumnoSchema = SchemaFactory.createForClass(Alumno);
