import { AdminJSOptions } from 'adminjs';
import prisma from 'src/db/index.js';
import { getModelByName } from '@adminjs/prisma';
import axios from 'axios';

import componentLoader, { Components } from './component-loader.js';

const dashboardHandler = async () => {
  const BASE_URL = 'http://localhost:3000';
  let response = await axios.get(`${BASE_URL}/colaborador`);
  const qtdColaboradores = response.data.length;

  response = await axios.get(`${BASE_URL}/cliente`);
  const qtdClientes = response.data.length;

  response = await axios.get(`${BASE_URL}/servico`);
  const qtdServico = response.data.length;

  response = await axios.get(`${BASE_URL}/prestador`);
  const qtdPrestador = response.data.length;

  response = await axios.get(`${BASE_URL}/material`);
  const qtdMaterial = response.data.length;

  response = await axios.get(`${BASE_URL}/material/quantidade-minima`);
  const qtdMaterialBaixo = response.data.length;

  response = await axios.get(`${BASE_URL}/epi`);
  const qtdEpi = response.data.length;

  response = await axios.get(`${BASE_URL}/epi/quantidade-minima`);
  const qtdEpiBaixo = response.data.length;

  response = await axios.get(`${BASE_URL}/contrato-geral`);
  const qtdContratoGeral = response.data.length;

  return {
    qtdColaboradores,
    qtdClientes,
    qtdServico,
    qtdPrestador,
    qtdMaterial,
    qtdEpi,
    qtdContratoGeral,
    qtdMaterialBaixo,
    qtdEpiBaixo,
  };
};

const options: AdminJSOptions = {
  componentLoader,
  dashboard: {
    component: Components.Dashboard,
    handler: dashboardHandler,
  },
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
        // properties: {
        //   id_epi: {
        //     reference: 'EPI',
        //   },
        // },
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
