/* eslint-disable camelcase */
import prisma from 'src/db/index.js';

export default class MaterialContratoRepository {
  static async insert(
    quantidade_solicitada: number,
    quantidade_utilizada: number | null,
    quantidade_devolvida: number | null,
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_contrato_geral: number,
    id_material: number,
  ) {
    return prisma.materialContrato.create({
      data: {
        quantidade_solicitada,
        quantidade_utilizada,
        quantidade_devolvida,
        data_entrega,
        data_devolucao,
        observacao,
        id_contrato_geral,
        id_material,
      },
    });
  }

  static async getAll() {
    return prisma.materialContrato.findMany();
  }

  static async getById(id: number) {
    return prisma.materialContrato.findUnique({ where: { id } });
  }

  static async getByMaterial(id_material: number) {
    return prisma.materialContrato.findMany({ where: { id_material } });
  }

  static async getByContract(id_contrato_geral: number) {
    return prisma.materialContrato.findMany({ where: { id_contrato_geral } });
  }

  static async deleteById(id: number) {
    return prisma.materialContrato.delete({ where: { id } });
  }

  static async update(materialContrato: {
    id: number,
    quantidade_solicitada: number,
    quantidade_utilizada: number | null,
    quantidade_devolvida: number | null,
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_contrato_geral: number,
    id_material: number,}) {
    return prisma.materialContrato.update({
      where: {
        id: materialContrato.id,
      },
      data: {
        quantidade_solicitada: materialContrato.quantidade_solicitada,
        quantidade_utilizada: materialContrato.quantidade_utilizada,
        quantidade_devolvida: materialContrato.quantidade_devolvida,
        data_entrega: materialContrato.data_entrega,
        data_devolucao: materialContrato.data_devolucao,
        observacao: materialContrato.observacao,
        id_contrato_geral: materialContrato.id_contrato_geral,
        id_material: materialContrato.id_material,

      },
    });
  }
}
