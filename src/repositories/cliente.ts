import prisma from 'src/db/index.js';

export default class ClienteRepository {
  static async insert(nome: string, cnpj: string, endereco: string, telefone: string, email: string) {
    return prisma.cliente.create({
      data: {
        nome, cnpj, endereco, telefone, email,
      },
    });
  }

  static async getByName(nome: string) {
    return prisma.cliente.findMany({
      where: { nome },
    });
  }

  static getAll() {
    return prisma.cliente.findMany();
  }

  static async getById(id: number) {
    return prisma.cliente.findUnique({
      where: { id },
    });
  }

  static async deleteBy(id: number) {
    return prisma.cliente.delete({
      where: { id },
    });
  }

  static async update(cliente:
    { id: number, nome: string, cnpj: string, endereco: string, telefone: string, email: string }) {
    return prisma.cliente.update({
      where: { id: cliente.id },
      data: {
        nome: cliente.nome,
        cnpj: cliente.cnpj,
        endereco: cliente.endereco,
        telefone: cliente.telefone,
        email: cliente.email,
      },
    });
  }
}
