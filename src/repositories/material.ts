import prisma from 'src/db/index.js';

export default class MaterialRepository {
  static async insert(nome: string, categoria: string, unidade_medida: string, quantidade_minima: number, quantidade_atual: number) {
    return prisma.material.create({ data: { nome, categoria, unidade_medida, quantidade_minima, quantidade_atual } });
  }

  static async getByName(nome: string) {
    return prisma.material.findMany({ where: { nome } });
  }

  static async getAll() {
    return prisma.material.findMany();
  }

  static async getById(id: number) {
    return prisma.material.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.material.delete({ where: { id } });
  }

  static async update(material: {id: number, nome: string, categoria: string, unidade_medida: string, quantidade_minima: number, quantidade_atual: number}) {
    return prisma.material.update({
      where: {
        id: material.id,
      },
      data: {
        nome: material.nome,
        categoria: material.categoria,
        unidade_medida: material.unidade_medida,
        quantidade_minima: material.quantidade_minima,
        quantidade_atual: material.quantidade_atual,
      },
    });
  }
}