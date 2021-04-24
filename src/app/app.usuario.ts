export interface Usuario {
    id?: number;
    nome: string;
    email: string;
    telefone: string;
    dtCadastro: Date;
    urlFoto?: string;
  }