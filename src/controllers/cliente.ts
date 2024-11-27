import { Router } from 'express';
import ClienteService from 'src/services/cliente.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      nome, cnpj, endereco, telefone, email,
    } = req.body;

    const cliente = await ClienteService.insert(nome, cnpj, endereco, telefone, email);
    res.status(201).json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const clientes = await ClienteService.getAll();
    res.json(clientes);
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
      res.status(400).json({ message: 'Id inválido!' });
    }
    const cliente = await ClienteService.getById(_id);
    res.json(cliente);
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
      res.status(400).json({ message: 'Id inválido!' });
    }
    await ClienteService.delete(_id);
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
      res.status(400).json({ message: 'Id inválido!' });
    }

    const cliente = await ClienteService.update(_id, nome, cnpj, endereco, telefone, email);
    res.json(cliente);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
