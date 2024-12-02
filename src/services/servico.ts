import ServicoRepository from 'src/repositories/servico.js';

export default class ServicoService {
  static async insert(nome: string, categoria: string) {
    const servico = await ServicoRepository.insert(nome, categoria);
    return servico;
  }

  static async getByName(nome: string) {
    const servico = await ServicoRepository.getByName(nome);
    return servico;
  }

  static async getAll() {
    const servico = await ServicoRepository.getAll();
    return servico;
  }

  static async getById(id: number) {
    const servico = await ServicoRepository.getById(id);
    return servico;
  }

  static async delete(id: number) {
    await ServicoRepository.deleteById(id);
  }

  static async update(id: number, nome: string, categoria: string) {
    const servico = await ServicoRepository.update({ id, nome, categoria });
    return servico;
  }
}
