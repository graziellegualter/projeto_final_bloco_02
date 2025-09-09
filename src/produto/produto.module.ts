import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProdutoService } from "./services/produto.service";
import { CategoriaModule } from "../categoria/categoria.module";
import { Produto } from "./entities/produto.entity";
import { ProdutoController } from "./controllers/produto.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    providers: [ProdutoService, ProdutoService],
    controllers: [ProdutoController],
    exports: [TypeOrmModule]

})

export class ProdutoModule {}