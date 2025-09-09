import { IsNotEmpty } from "class-validator";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({name: "tb_produto"})
export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 255, nullable:false})
    nome: string;

    @IsNotEmpty()
    @Column({type: 'decimal', precision: 10, scale: 2, nullable: false})
    preco: number;

    @Column({type: "date", nullable: false})
    validade: Date;

    @Column({length: 255, nullable: false})
    marca: string;

    @CreateDateColumn({name: 'data_cadastro'})
    dataCadastro: Date;

    @ManyToOne(()=> Categoria, (categoria)=> categoria.produto, {
        onDelete: 'CASCADE'
    })
    @JoinColumn({name:'categoria_id'})
    categoria: Categoria


}