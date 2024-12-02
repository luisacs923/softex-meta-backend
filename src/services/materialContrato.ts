/* eslint-disable camelcase */
import MaterialContratoRepository from 'src/repositories/materialContrato.js';
import MaterialRepository from 'src/repositories/material.js';

export default class MaterialContratoService {
  static async insert(
    quantidade_solicitada: number,
    quantidade_utilizada: number | null,
    quantidade_devolvida: number | null,
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_contrato_geral: number,
    id_material: number,
  ) {
    const material = await MaterialRepository.getById(id_material);
    if (material.quantidade_atual >= quantidade_solicitada) {
      const materialContrato = await MaterialContratoRepository.insert(
        quantidade_solicitada,
        quantidade_utilizada,
        quantidade_devolvida,
        data_entrega,
        data_devolucao,
        observacao,
        id_contrato_geral,
        id_material,
      );
      await MaterialRepository.updateEstoque({
        id: id_material,
        quantidade_atual:
        (material.quantidade_atual - quantidade_solicitada),
      });

      return materialContrato;
    }
    throw new Error('O material não possui estoque suficiente para o contrato!');
  }

  static async getAll() {
    const materialContratos = await MaterialContratoRepository.getAll();
    return materialContratos;
  }

  static async getById(id: number) {
    const materialContrato = await MaterialContratoRepository.getById(id);
    return materialContrato;
  }

  static async getByMaterial(id_material: number) {
    const materialContratos = await MaterialContratoRepository.getByMaterial(id_material);
    return materialContratos;
  }

  static async getByContract(id_contrato_geral: number) {
    const materialContratos = await MaterialContratoRepository.getByContract(id_contrato_geral);
    return materialContratos;
  }

  static async delete(id: number) {
    await MaterialContratoRepository.deleteById(id);
  }

  static async update(
    id: number,
    quantidade_solicitada: number,
    quantidade_utilizada: number | null,
    quantidade_devolvida: number | null,
    data_entrega: Date,
    data_devolucao: Date | null,
    observacao: string,
    id_contrato_geral: number,
    id_material: number,
  ) {
    const materialContrato = await MaterialContratoRepository.update({
      id,
      quantidade_solicitada,
      quantidade_utilizada,
      quantidade_devolvida,
      data_entrega,
      data_devolucao,
      observacao,
      id_contrato_geral,
      id_material,
    });
    return materialContrato;
  }
}
