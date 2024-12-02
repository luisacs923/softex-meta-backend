import { AdminJSOptions } from 'adminjs';
import prisma from 'src/db/index.js';
import { getModelByName } from '@adminjs/prisma';

import componentLoader from './component-loader.js';

const options: AdminJSOptions = {
  componentLoader,
  rootPath: '/admin',
  resources: [
    {
      resource: { model: getModelByName('Colaborador'), client: prisma },
      options: {
        titleProperty: 'nome',
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('Servico'), client: prisma },
      options: {
        titleProperty: 'nome',
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('Prestador'), client: prisma },
      options: {
        titleProperty: 'nome',
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('Cliente'), client: prisma },
      options: {
        titleProperty: 'nome',
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('Material'), client: prisma },
      options: {
        titleProperty: 'nome',
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('EPI'), client: prisma },
      options: {
        titleProperty: 'nome',
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('EntregaEpi'), client: prisma },
      options: {
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('ContratoGeral'), client: prisma },
      options: {
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('ContratoColaborador'), client: prisma },
      options: {
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
    {
      resource: { model: getModelByName('MaterialContrato'), client: prisma },
      options: {
        // listProperties: ['id', 'nome', 'cpf', 'cbo', 'entregaEpi', 'contrato_colaborador'], // Campos de listagem
        // editProperties: ['nome', 'cpf', 'cbo'], // Campos editáveis
        // filterProperties: ['nome', 'cpf', 'cbo'], // Campos para filtragem
      },
    },
  ],
  // databases: [],
};

export default options;
