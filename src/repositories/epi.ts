import prisma from 'src/db/index.js';

export default class EpiRepository {
  static async insert(
    nome: string,
    categoria: string,
    ca: string,
    tipo: string,
    qtdMinima: number,
    qtdAtual: number,
  ) {
    return prisma.ePI.create({
      data: {
        nome,
        categoria,
        ca,
        tipo,
        qtdMinima,
        qtdAtual,
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
        qtdAtual: epi.qtdAtual,
      },
    });
  }

  static async updateEstoque(epi: {id: number, qtdAtual: number}) {
    return prisma.ePI.update({
      where: {
        id: epi.id,
      },
      data: {
        qtdAtual: epi.qtdAtual,
      },
    });
  }

  static async checarQuantidadeMinima() {
    return prisma.ePI.findMany({
      where: {
        qtdAtual: {
          lt: prisma.ePI.fields.qtdMinima,
        },
      },
    });
  }
}
