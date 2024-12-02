import MaterialRepository from 'src/repositories/material.js';

export default class MaterialService {
  static async insert(nome: string, categoria: string, unidade_medida: string, quantidade_minima: number, quantidade_atual: number) {
    // TODO: Fazer validação dos campos
    const material = await MaterialRepository.insert(nome, categoria, unidade_medida, quantidade_minima, quantidade_atual);
    return material;
  }

  static async getByName(nome: string) {
    const materiais = await MaterialRepository.getByName(nome);
    return materiais;
  }

  static async getAll() {
    const materiais = await MaterialRepository.getAll();
    return materiais;
  }

  static async getById(id: number) {
    const material = await MaterialRepository.getById(id);
    return material;
  }

  static async delete(id: number) {
    await MaterialRepository.deleteById(id);
  }

  static async update(id: number, nome: string, categoria: string, unidade_medida: string, quantidade_minima: number, quantidade_atual: number) {
    const material = await MaterialRepository.update({
      id, nome, categoria, unidade_medida, quantidade_minima, quantidade_atual
    });
    return material;
  }
}
