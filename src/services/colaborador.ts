import ColaboradorRepository from 'src/repositories/colaborador.js';

export default class ColaboradorService {
  static async insert(nome: string, cpf: string, cbo: string) {
    // TODO: Fazer validação dos campos
    const colaborador = await ColaboradorRepository.insert(nome, cpf, cbo);
    return colaborador;
  }

  static async getByName(nome: string) {
    const colaboradores = await ColaboradorRepository.getByName(nome);
    return colaboradores;
  }

  static async getAll() {
    const colaboradores = await ColaboradorRepository.getAll();
    return colaboradores;
  }

  static async getById(id: number) {
    const colaborador = await ColaboradorRepository.getById(id);
    return colaborador;
  }

  static async delete(id: number) {
    await ColaboradorRepository.deleteById(id);
  }

  static async update(id: number, nome: string, cpf: string, cbo: string) {
    const colaborador = await ColaboradorRepository.update({
      id, nome, cpf, cbo,
    });
    return colaborador;
  }
}
