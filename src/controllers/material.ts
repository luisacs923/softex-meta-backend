/* eslint-disable camelcase */
/* eslint-disable no-console */
import { Router } from 'express';
import MaterialService from 'src/services/material.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      nome, categoria, unidade_medida, quantidade_minima, quantidade_atual,
    } = req.body;

    const material = await MaterialService.insert(nome, categoria, unidade_medida, quantidade_minima, quantidade_atual);
    res.status(201).json(material);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const materiais = await MaterialService.getAll();
    res.json(materiais);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/quantidade-minima/', async (req, res) => {
  try {
    const materiais = await MaterialService.checarQuantidadeMinima();
    res.json(materiais);
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
    const material = await MaterialService.getById(_id);
    if (!material) {
      return res.status(404).send();
    }
    return res.json(material);
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
    await MaterialService.delete(_id);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      nome, categoria, unidade_medida, quantidade_minima, quantidade_atual,
    } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const material = await MaterialService.update(
      _id,
      nome,
      categoria,
      unidade_medida,
      quantidade_minima,
      quantidade_atual,
    );
    return res.json(material);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default router;
