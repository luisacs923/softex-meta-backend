import ClienteRepository from 'src/repositories/cliente.js';

export default class ClienteService {
  static async insert(nome: string, cnpj: string, endereco: string, telefone: string, email: string) {
    const cliente = await ClienteRepository.insert(nome, cnpj, endereco, telefone, email);
    return cliente;
  }

  static async getByName(nome: string) {
    const cliente = await ClienteRepository.getByName(nome);
    return cliente;
  }

  static async getAll() {
    const clientes = await ClienteRepository.getAll();
    return clientes;
  }

  static async getById(id: number) {
    const cliente = await ClienteRepository.getById(id);
    return cliente;
  }

  static async delete(id: number) {
    await ClienteRepository.deleteBy(id);
  }

  static async update(id: number, nome: string, cnpj: string, endereco: string, telefone: string, email: string) {
    const cliente = await ClienteRepository.update({
      id, nome, cnpj, endereco, telefone, email,
    });
    return cliente;
  }
}
