import prisma from 'src/db/index.js';

export default class PrestadorRepository {
  static async insert(nome: string, cnpj: string, endereco: string, telefone: string, email: string) {
    return prisma.prestador.create({
      data: {
        nome, cnpj, endereco, telefone, email,
      },
    });
  }

  static async getByName(nome: string) {
    return prisma.prestador.findMany({ where: { nome } });
  }

  static async getAll() {
    return prisma.prestador.findMany();
  }

  static async getById(id: number) {
    return prisma.prestador.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.prestador.delete({ where: { id } });
  }

  static async update(prestador: {id: number, nome: string, cnpj: string,
    endereco: string, telefone: string, email: string }) {
    return prisma.prestador.update({
      where: {
        id: prestador.id,
      },
      data: {
        nome: prestador.nome,
        cnpj: prestador.cnpj,
        endereco: prestador.endereco,
        telefone: prestador.telefone,
        email: prestador.email,
      },
    });
  }
}
