import prisma from 'src/db/index.js';

export default class ServicoRepository {
  static async insert(nome: string, categoria: string) {
    return prisma.servico.create({ data: { nome, categoria } });
  }

  static async getByName(nome: string) {
    return prisma.servico.findMany({ where: { nome } });
  }

  static async getAll() {
    return prisma.servico.findMany();
  }

  static async getById(id: number) {
    return prisma.servico.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.servico.delete({ where: { id } });
  }

  static async update(servico: { id: number, nome: string, categoria: string }) {
    return prisma.servico.update({
      where: {
        id: servico.id,
      },
      data: {
        nome: servico.nome,
        categoria: servico.categoria,
      },
    });
  }
}
