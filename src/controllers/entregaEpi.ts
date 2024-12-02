/* eslint-disable no-console */
/* eslint-disable camelcase */
/* eslint-disable comma-dangle */
import { Router } from 'express';
import EntregaEpiService from 'src/services/entregaepi.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      data_entrega,
      data_devolucao,
      observacao,
      id_epi,
      id_colaborador
    } = req.body;

    const entregaEpi = await EntregaEpiService.insert(data_entrega, data_devolucao, observacao, id_epi, id_colaborador);
    res.status(200).json(entregaEpi);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const entregasEpi = await EntregaEpiService.getAll();
    res.json(entregasEpi);
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
    const entregaEpi = await EntregaEpiService.getById(_id);
    if (!entregaEpi) {
      return res.status(404).send();
    }
    return res.json(entregaEpi);
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
    await EntregaEpiService.delete(_id);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      data_entrega,
      data_devolucao,
      observacao,
      id_epi,
      id_colaborador
    } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const entregaEpi = await EntregaEpiService.update(
      _id,
      data_entrega,
      data_devolucao,
      observacao,
      id_epi,
      id_colaborador
    );
    return res.json(entregaEpi);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default router;
