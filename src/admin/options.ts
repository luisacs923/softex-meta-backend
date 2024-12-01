import { AdminJSOptions } from 'adminjs';
// import { PrismaClient } from '@prisma/client'; // Importando PrismaClient para acessar o banco de dados
import componentLoader from './component-loader.js';

// Inicializando o PrismaClient
// const prisma = new PrismaClient();

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    //   {
    //     resource: prisma.colaborador, // Referência para o modelo 'Colaborador' do Prisma
    //     options: {
    //       listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
    //       editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
    //       filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
    //     },
    //   },
    //   // Adicione outros recursos aqui, se necessário
  ],
  databases: [],
};

export default options;
