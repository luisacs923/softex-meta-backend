import prisma from 'src/db/index.js';

export default class EpiRepository {
  static async insert(
    nome: string,
    categoria: string,
    ca: string,
    tipo: string,
    qtdMinima: number,
    // eslint-disable-next-line comma-dangle
    qtdAtual: number
  ) {
    return prisma.ePI.create({
      data: {
        nome,
        categoria,
        ca,
        tipo,
        qtdMinima,
        // eslint-disable-next-line comma-dangle
        qtdAtual
      },
    });
  }

  static async getByName(nome: string) {
    return prisma.ePI.findMany({ where: { nome } });
  }

  static async getAll() {
    return prisma.ePI.findMany();
  }

  static async getById(id: number) {
    return prisma.ePI.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.ePI.delete({ where: { id } });
  }

  static async update(epi: {
    id: number,
    nome: string,
    categoria: string,
    ca: string,
    tipo: string,
    qtdMinima: number,
    qtdAtual: number
  }) {
    return prisma.ePI.update({
      where: {
        // eslint-disable-next-line comma-dangle
        id: epi.id
      },
      data: {
        nome: epi.nome,
        categoria: epi.categoria,
        ca: epi.ca,
        tipo: epi.tipo,
        qtdMinima: epi.qtdMinima,
        // eslint-disable-next-line comma-dangle
        qtdAtual: epi.qtdAtual
      },
    });
  }
}
