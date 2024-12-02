import { Router } from 'express';
import PrestadorService from 'src/services/prestador.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      nome, cnpj, endereco, telefone, email,
    } = req.body;

    const prestador = await PrestadorService.insert(nome, cnpj, endereco, telefone, email);
    res.status(201).json(prestador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const prestadores = await PrestadorService.getAll();
    res.json(prestadores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      res.status(400).json({ message: 'Id inválido!' });
    }
    const prestador = await PrestadorService.getById(_id);
    res.json(prestador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/nome/:nome', async (req, res) => {
  try {
    const { nome } = req.params;
    if (!String(nome)) {
      res.status(400).json({ message: 'Nome inválido!' });
    }
    const prestadores = await PrestadorService.getByName(nome);
    res.json(prestadores);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      res.status(400).json({ message: 'Id inválido!' });
    }
    await PrestadorService.delete(_id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      nome, cnpj, endereco, telefone, email,
    } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      res.status(400).json({ message: 'Id inválido!' });
    }
    const prestador = await PrestadorService.update(_id, nome, cnpj, endereco, telefone, email);
    res.json(prestador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
