import prisma from 'src/db/index.js';

export default class ContratoGeralRepository {
  static async insert(
    descricao_servico: string,
    responsavel: string,
    data_inicio: Date,
    data_fim: Date,
    valor: number,
    prestadorId: number,
    clienteId: number,
    servicoId: number
  ) {
    return prisma.contratoGeral.create({
      data: {
        descricao_servico,
        responsavel,
        data_inicio,
        data_fim,
        valor,
        prestador: {
          connect: { id: prestadorId }, // Usando connect para associar um prestador existente, mas pode criar novos registros ao mesmo tempo, usando o método create em vez de connect
        },
        cliente: {
          connect: { id: clienteId }, // Usando connect para associar um cliente existente, mas pode criar novos registros ao mesmo tempo, usando o método create em vez de connect
        },
        servico: {
          connect: { id: servicoId }, // Usando connect para associar um serviço existente, mas pode criar novos registros ao mesmo tempo, usando o método create em vez de connect
        },
      },
    });
  }

  static async getByResponsavel(responsavel: string) {
    return prisma.contratoGeral.findMany({ where: { responsavel } });
  }

  static async getAll() {
    return prisma.contratoGeral.findMany();
  }

  static async getById(id: number) {
    return prisma.contratoGeral.findUnique({ where: { id } });
  }

  static async deleteById(id: number) {
    return prisma.contratoGeral.delete({ where: { id } });
  }

  static async update(contratogeral: { id: number; descricao_servico: string; responsavel: string; valor: number }) {
    return prisma.contratoGeral.update({
      where: {
        id: contratogeral.id,
      },
      data: {
        descricao_servico: contratogeral.descricao_servico,
        responsavel: contratogeral.responsavel,
        valor: contratogeral.valor,
      },
    });
  }
}
