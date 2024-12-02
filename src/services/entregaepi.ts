/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
import EntregaEpiRepository from 'src/repositories/entregaepi.js';

export default class EntregaEpiService {
  static async insert(
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_epi: number,
    id_colaborador: number
  ) {
    const entregaEpi = await EntregaEpiRepository.insert(
      data_entrega,
      data_devolucao,
      observacao,
      id_epi,
      id_colaborador
    );
    return entregaEpi;
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
