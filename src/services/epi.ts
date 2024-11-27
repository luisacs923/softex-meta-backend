import EpiRepository from 'src/repositories/epi.js';

export default class EpiService {
  static async insert(
    nome: string,
    categoria: string,
    ca: string,
    tipo: string,
    qtdMinima: number,
    // eslint-disable-next-line comma-dangle
    qtdAtual: number
  ) {
    // TODO: Fazer validação dos campos
    const epi = await EpiRepository.insert(nome, categoria, ca, tipo, qtdMinima, qtdAtual);
    return epi;
  }

  static async getByName(nome: string) {
    const epis = await EpiRepository.getByName(nome);
    return epis;
  }

  static async getAll() {
    const epis = await EpiRepository.getAll();
    return epis;
  }

  static async getById(id: number) {
    const epi = await EpiRepository.getById(id);
    return epi;
  }

  static async delete(id: number) {
    await EpiRepository.deleteById(id);
  }

  static async update(
    id: number,
    nome: string,
    categoria: string,
    ca: string,
    tipo: string,
    qtdMinima: number,
    // eslint-disable-next-line comma-dangle
    qtdAtual: number
  ) {
    const epi = await EpiRepository.update({
      id,
      nome,
      categoria,
      ca,
      tipo,
      qtdMinima,
      // eslint-disable-next-line comma-dangle
      qtdAtual
    });
    return epi;
  }
}
