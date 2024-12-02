import PrestadorRepository from 'src/repositories/prestador.js';

export default class PrestadorService {
  static async insert(nome: string, cnpj: string, endereco: string, telefone: string, email: string) {
    const prestador = await PrestadorRepository.insert(nome, cnpj, endereco, telefone, email);
    return prestador;
  }

  static async getByName(nome: string) {
    const prestador = await PrestadorRepository.getByName(nome);
    return prestador;
  }

  static async getAll() {
    const prestadores = await PrestadorRepository.getAll();
    return prestadores;
  }

  static async getById(id: number) {
    const prestador = await PrestadorRepository.getById(id);
    return prestador;
  }

  static async delete(id: number) {
    await PrestadorRepository.deleteById(id);
  }

  static async update(id: number, nome: string, cnpj: string, endereco: string, telefone: string, email: string) {
    const prestador = await PrestadorRepository.update({
      id, nome, cnpj, endereco, telefone, email,
    });
    return prestador;
  }
}
