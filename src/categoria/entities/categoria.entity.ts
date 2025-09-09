import { IsNotEmpty } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Produto } from "../../produto/entities/produto.entity";

@Entity({name: "tb_categoria"})
export class Categoria {
    @PrimaryGeneratedColumn()
    id: number;

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    nome: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false})
    descricao: string;

    @UpdateDateColumn()
    dataEntrada: Date;

    @OneToMany(()=> Produto, (produto) => produto.categoria)
    produto: Produto[]
   
   

}