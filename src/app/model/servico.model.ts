import { Cliente } from "./cliente.model";

export class Servico {
    id!: number;
    descricao!: string;
    valorPagamento!: number;
    situacaoPagamento!: string;
    cliente!: Cliente;
    dataCadastro!: string;
}