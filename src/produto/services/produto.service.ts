import { DeleteResult, ILike, Repository } from "typeorm";
import { Produto } from "../entities/produto.entity";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { CategoriaService } from "../../categoria/services/categoria.service";

@Injectable()
export class ProdutoService {
    findByNome: any;
         
    constructor(
        @InjectRepository(Produto)
        private produtoRepository: Repository<Produto>,
        

    ) { }

    async findAll(): Promise<Produto[]> {
        return await this.produtoRepository.find({
            relations:{
                categoria: true
            }
        });

    }

    async findById(id: number): Promise<Produto> {
        const produto = await this.produtoRepository.findOne({
            where: {
                id,
            },
            relations:{
                categoria: true
            }

        });

        if (!produto)
            throw new HttpException("Produto não encontrado!", HttpStatus.NOT_FOUND);

        return produto;
    }

    async findByMarca(marca: string): Promise<Produto[]> {
        return await this.produtoRepository.find({
            where: {
                marca: ILike(`%${marca}%`)
            },
            relations: {
                categoria: true
            }

        })

    }

    async create(produto: Produto): Promise<Produto> {
        return await this.produtoRepository.save(produto);

    }

    async update(produto: Produto): Promise<Produto> {
        let buscaProduto = await this.findById(produto.id);

        if (!buscaProduto || !produto.id)
            throw new HttpException('Itens não encontrado!', HttpStatus.NOT_FOUND);

        return await this.produtoRepository.save(produto);

    }

    async delete(id: number): Promise <DeleteResult> {
    const buscaProduto = await this.findById(id)

    if(!buscaProduto)
            throw new HttpException("Itens não encontrados!", HttpStatus.NOT_FOUND);

    return await this.produtoRepository.delete(id);
}

}