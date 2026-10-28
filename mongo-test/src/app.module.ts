import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AlumnosModule } from './alumnos/alumnos.module';
import { ConfigModule } from '@nestjs/config';
import { MateriaModule } from './materia/materia.module';

@Module({
 imports: [
  ConfigModule.forRoot(),
  MongooseModule.forRoot(process.env.CONNECTION_STRING!), 
  AlumnosModule, MateriaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
