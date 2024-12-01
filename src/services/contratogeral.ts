import ContratoGeralRepository from 'src/repositories/contratogeral.js';

export default class ContratoGeralService {
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
    // TODO: Fazer validação dos campos
    const contratogeral = await ContratoGeralRepository.insert(
      descricao_servico,
      responsavel,
      data_inicio,
      data_fim,
      valor,
      prestadorId,
      clienteId,
      servicoId
    );
    return contratogeral;
  }

  static async getByResponsavel(responsavel: string) {
    const contratogeral = await ContratoGeralRepository.getByResponsavel(responsavel);
    return contratogeral;
  }

  static async getAll() {
    const contratogeral = await ContratoGeralRepository.getAll();
    return contratogeral;
  }

  static async getById(id: number) {
    const contratogeral = await ContratoGeralRepository.getById(id);
    return contratogeral;
  }

  static async deleteById(id: number) {
    await ContratoGeralRepository.deleteById(id);
  }

  static async update(id: number, descricao_servico: string, responsavel: string, valor: number) {
    const contratogeral = await ContratoGeralRepository.update({
      id,
      descricao_servico,
      responsavel,
      valor,
    });
    return contratogeral;
  }
}
