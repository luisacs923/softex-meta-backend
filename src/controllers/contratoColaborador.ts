/* eslint-disable no-console */
/* eslint-disable camelcase */
import { Router } from 'express';
import ContratoColaboradorService from 'src/services/contratoColaborador.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      data_inicio,
      data_fim,
      quantidade_horas,
      valor_hora,
      id_contrato_geral,
      id_colaborador,
    } = req.body;
    const _data_inicio = new Date(data_inicio);
    const _data_fim = new Date(data_fim);
    const contratoColaborador = await ContratoColaboradorService.insert(
      _data_inicio,
      _data_fim,
      quantidade_horas,
      valor_hora,
      id_contrato_geral,
      id_colaborador,
    );
    res.status(201).json(contratoColaborador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const contratoColaboradores = await ContratoColaboradorService.getAll();
    res.json(contratoColaboradores);
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
    const contratoColaborador = await ContratoColaboradorService.getById(_id);
    if (!contratoColaborador) {
      return res.status(404).send();
    }
    return res.json(contratoColaborador);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.get('/colaborador/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const contratosColaborador = await ContratoColaboradorService.getByColaborador(_id);
    return res.json(contratosColaborador);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.get('/contract/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const contratoColaboradores = await ContratoColaboradorService.getByContract(_id);
    return res.json(contratoColaboradores);
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
    await ContratoColaboradorService.deleteById(_id);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      data_inicio,
      data_fim,
      quantidade_horas,
      valor_hora,
      id_colaborador,
      id_contrato_geral,
    } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    const _data_inicio = new Date(data_inicio);
    const _data_fim = new Date(data_fim);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const contratoColaborador = await ContratoColaboradorService.update(
      _id,
      _data_inicio,
      _data_fim,
      quantidade_horas,
      valor_hora,
      id_colaborador,
      id_contrato_geral,
    );
    return res.json(contratoColaborador);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default router;
