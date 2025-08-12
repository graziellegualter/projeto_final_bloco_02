import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';



@Module({
  imports: [TypeOrmModule.forRoot ({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '212055',
    database: 'db_projeto_final_bloco_02',
    entities: [],
    synchronize: true,
    logging: true,

})],
  controllers: [],
  providers: [],
})
export class AppModule {}
