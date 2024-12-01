/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
import prisma from 'src/db/index.js';

export default class EntregaEpiRepository {
  static async insert(
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_epi: number,
    id_colaborador: number
  ) {
    return prisma.entregaEpi.create({
      data: {
        data_entrega,
        data_devolucao: data_devolucao || undefined,
        observacao,
        epi: {
          connect: { id: id_epi }
        },
        colaborador: {
          connect: { id: id_colaborador }
        }
      }
    });
  }

  static async getAll() {
    return prisma.entregaEpi.findMany();
  }

  static async getById(id: number) {
    return prisma.entregaEpi.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.entregaEpi.delete({ where: { id } });
  }

  static async update(entregaEpi: {
    id: number,
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_epi: number,
    id_colaborador: number
  }) {
    return prisma.entregaEpi.update({
      where: {
        id: entregaEpi.id
      },
      data: {
        data_entrega: entregaEpi.data_entrega,
        data_devolucao: entregaEpi.data_devolucao || undefined,
        observacao: entregaEpi.observacao,
        epi: {
          connect: { id: entregaEpi.id_epi }
        },
        colaborador: {
          connect: { id: entregaEpi.id_colaborador }
        }
      },
    });
  }
}
