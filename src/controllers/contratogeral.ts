/* eslint-disable no-console */
import { Router } from 'express';
import ContratoGeralService from 'src/services/contratogeral.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      descricao_servico, responsavel, data_inicio, data_fim, valor, prestadorId, clienteId, servicoId,
    } = req.body;

    const contratogeral = await ContratoGeralService.insert(
      descricao_servico,
      responsavel,
      data_inicio,
      data_fim,
      valor,
      prestadorId,
      clienteId,
      servicoId,
    );
    res.status(201).json(contratogeral);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error });
  }
});

router.get('/responsavel/:responsavel', async (req, res) => {
  try {
    const { responsavel } = req.params;

    if (!responsavel || responsavel.trim() === '') {
      res.status(400).json({ message: 'Campo de string inválido!' });
    }
    const contratogeral = await ContratoGeralService.getByResponsavel(responsavel);

    if (!contratogeral) {
      res.status(404).json({ message: 'Não encontrado!' });
      return;
    }

    res.json(contratogeral);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const contratogeral = await ContratoGeralService.getAll();
    res.json(contratogeral);
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
    const contratogeral = await ContratoGeralService.getById(_id);
    res.json(contratogeral);
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
      return res.status(400).json({ message: 'Id inválido!' });
    }
    await ContratoGeralService.deleteById(_id);
    res.status(204).send();
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { descricao_servico, responsavel, valor } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      res.status(400).json({ message: 'Id inválido!' });
    }
    const contratogeral = await ContratoGeralService.update(_id, descricao_servico, responsavel, valor);
    res.json(contratogeral);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

export default router;
