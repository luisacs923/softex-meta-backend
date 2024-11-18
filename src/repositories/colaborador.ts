import prisma from 'src/db/index.js';

export default class ColaboradorRepository {
  static async insert(nome: string, cpf: string, cbo: string) {
    return prisma.colaborador.create({ data: { nome, cpf, cbo } });
  }

  static async getByName(nome: string) {
    return prisma.colaborador.findMany({ where: { nome } });
  }

  static async getAll() {
    return prisma.colaborador.findMany();
  }

  static async getById(id: number) {
    return prisma.colaborador.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.colaborador.delete({ where: { id } });
  }

  static async update(colaborador: {id: number, nome: string, cpf: string, cbo: string}) {
    return prisma.colaborador.update({
      where: {
        id: colaborador.id,
      },
      data: {
        nome: colaborador.nome,
        cpf: colaborador.cpf,
        cbo: colaborador.cbo,
      },
    });
  }
}
