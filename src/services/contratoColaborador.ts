/* eslint-disable camelcase */
import ContratoColaboradorRepository from 'src/repositories/contratoColaborador.js';

export default class ContratoColaboradorService {
  static async insert(
    data_inicio: Date,
    data_fim: Date,
    quantidade_horas: number,
    valor_hora: number,
    id_contrato_geral:number,
    id_colaborador:number,
  ) {
    const contratoColaborador = await ContratoColaboradorRepository.insert(
      data_inicio,
      data_fim,
      quantidade_horas,
      valor_hora,
      id_contrato_geral,
      id_colaborador,
    );
    return contratoColaborador;
  }

  static async getAll() {
    const contratoColaboradores = await ContratoColaboradorRepository.getAll();
    return contratoColaboradores;
  }

  static async getById(id: number) {
    const contratoColaborador = await ContratoColaboradorRepository.getById(id);
    return contratoColaborador;
  }

  static async getByColaborador(id_colaborador: number) {
    const contratosColaborador = await ContratoColaboradorRepository.getByColaborador(id_colaborador);
    return contratosColaborador;
  }

  static async getByContract(id_contrato_geral: number) {
    const contratoColaboradores = await ContratoColaboradorRepository.getByContract(id_contrato_geral);
    return contratoColaboradores;
  }

  static async deleteById(id: number) {
    await ContratoColaboradorRepository.deleteById(id);
  }

  static async update(
    id: number,
    data_inicio: Date,
    data_fim: Date,
    quantidade_horas: number,
    valor_hora: number,
    id_contrato_geral:number,
    id_colaborador:number,
  ) {
    const contratoColaborador = await ContratoColaboradorRepository.update({
      id, data_inicio, data_fim, quantidade_horas, valor_hora, id_colaborador, id_contrato_geral,
    });
    return contratoColaborador;
  }
}
