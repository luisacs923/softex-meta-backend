/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
import EntregaEpiRepository from 'src/repositories/entregaepi.js';
import EpiRepository from 'src/repositories/epi.js';

export default class EntregaEpiService {
  static async insert(
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_epi: number,
    id_colaborador: number
  ) {
    const epi = await EpiRepository.getById(id_epi);
    if (epi.qtdAtual >= 1) {
      const entregaEpi = await EntregaEpiRepository.insert(
        data_entrega,
        data_devolucao,
        observacao,
        id_epi,
        id_colaborador
      );
      await EpiRepository.updateEstoque({ id: id_epi, qtdAtual: (epi.qtdAtual - 1) });
      return entregaEpi;
    } throw new Error('O Epi não possui estoque suficiente!');
  }

  static async getAll() {
    const entregasEpi = await EntregaEpiRepository.getAll();
    return entregasEpi;
  }

  static async getById(id: number) {
    const entregaEpi = await EntregaEpiRepository.getById(id);
    return entregaEpi;
  }

  static async delete(id: number) {
    await EntregaEpiRepository.deleteById(id);
  }

  static async update(
    id: number,
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_epi: number,
    id_colaborador: number
  ) {
    const entregaEpi = await EntregaEpiRepository.update({
      id,
      data_entrega,
      data_devolucao,
      observacao,
      id_epi,
      id_colaborador
    });
    return entregaEpi;
  }
}
