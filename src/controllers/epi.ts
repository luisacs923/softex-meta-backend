import { Router } from 'express';
import EpiService from 'src/services/epi.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      nome,
      categoria,
      ca,
      tipo,
      qtdMinima,
      // eslint-disable-next-line comma-dangle
      qtdAtual
    } = req.body;

    const epi = await EpiService.insert(nome, categoria, ca, tipo, qtdMinima, qtdAtual);
    res.status(201).json(epi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const epis = await EpiService.getAll();
    res.json(epis);
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
    const epi = await EpiService.getById(_id);
    res.json(epi);
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
    await EpiService.delete(_id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      nome,
      categoria,
      ca,
      tipo,
      qtdMinima,
      // eslint-disable-next-line comma-dangle
      qtdAtual
    } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      res.status(400).json({ message: 'Id inválido!' });
    }
    const epi = await EpiService.update(_id, nome, categoria, ca, tipo, qtdMinima, qtdAtual);
    res.json(epi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;