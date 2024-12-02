/* eslint-disable no-console */
import { Router } from 'express';
import ServicoService from 'src/services/servico.js';

const router = Router();
router.post('/', async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    const servico = await ServicoService.insert(nome, categoria);
    res.status(201).json(servico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const servico = await ServicoService.getAll();
    res.json(servico);
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
    const servico = await ServicoService.getById(_id);
    if (!servico) {
      res.status(404).send();
    } else {
      res.json(servico);
    }
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
    await ServicoService.delete(_id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { nome, categoria } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      res.status(400).json({ message: 'Id inválido!' });
    }
    const servico = await ServicoService.update(_id, nome, categoria);
    res.json(servico);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
