/* eslint-disable no-console */
import { Router } from 'express';
import ColaboradorService from 'src/services/colaborador.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const { nome, cpf, cbo } = req.body;

    const colaborador = await ColaboradorService.insert(nome, cpf, cbo);
    res.status(201).json(colaborador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const colaboradores = await ColaboradorService.getAll();
    res.json(colaboradores);
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
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const colaborador = await ColaboradorService.getById(_id);
    if (!colaborador) {
      return res.status(404).send();
    }
    return res.json(colaborador);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    await ColaboradorService.delete(_id);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { nome, cpf, cbo } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const colaborador = await ColaboradorService.update(_id, nome, cpf, cbo);
    return res.json(colaborador);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default router;
