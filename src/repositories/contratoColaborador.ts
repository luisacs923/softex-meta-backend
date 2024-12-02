/* eslint-disable camelcase */
import prisma from 'src/db/index.js';

export default class ContratoColaborador {
  static async insert(
    data_inicio: Date,
    data_fim: Date,
    quantidade_horas: number,
    valor_hora: number,
    id_contrato_geral:number,
    id_colaborador:number,
  ) {
    return prisma.contratoColaborador.create({
      data: {
        data_inicio, data_fim, quantidade_horas, valor_hora, id_contrato_geral, id_colaborador,
      },
    });
  }

  static async getAll() {
    return prisma.contratoColaborador.findMany();
  }

  static async getById(id: number) {
    return prisma.contratoColaborador.findUnique({ where: { id } });
  }

  static async getByColaborador(id_colaborador: number) {
    return prisma.contratoColaborador.findMany({ where: { id_colaborador } });
  }

  static async getByContract(id_contrato_geral: number) {
    return prisma.contratoColaborador.findMany({ where: { id_contrato_geral } });
  }

  static async deleteById(id: number) {
    return prisma.contratoColaborador.delete({ where: { id } });
  }

  static async update(contratoColaborador: {id: number, data_inicio: Date,
    data_fim: Date,
    quantidade_horas: number,
    valor_hora: number,
    id_contrato_geral:number,
    id_colaborador:number}) {
    return prisma.contratoColaborador.update({
      where: { id: contratoColaborador.id },
      data: {
        data_inicio: contratoColaborador.data_inicio,
        data_fim: contratoColaborador.data_fim,
        quantidade_horas: contratoColaborador.quantidade_horas,
        valor_hora: contratoColaborador.valor_hora,
        id_contrato_geral: contratoColaborador.id_contrato_geral,
        id_colaborador: contratoColaborador.id_colaborador,
      },
    });
  }
}
