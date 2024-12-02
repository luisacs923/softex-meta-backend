/* eslint-disable camelcase */
import { Router } from 'express';
import MaterialContratoService from 'src/services/materialContrato.js';

const router = Router();

router.post('/', async (req, res) => {
  try {
    const {
      quantidade_solicitada,
      quantidade_utilizada,
      quantidade_devolvida,
      data_entrega,
      data_devolucao,
      observacao,
      id_contrato_geral,
      id_material,
    } = req.body;

    const colaborador = await MaterialContratoService.insert(
      quantidade_solicitada,
      quantidade_utilizada,
      quantidade_devolvida,
      data_entrega,
      data_devolucao,
      observacao,
      id_contrato_geral,
      id_material,
    );
    res.status(201).json(colaborador);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

router.get('/', async (req, res) => {
  try {
    const materialContratos = await MaterialContratoService.getAll();
    res.json(materialContratos);
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
    const materialContrato = await MaterialContratoService.getById(_id);
    if (!materialContrato) {
      return res.status(404).send();
    }
    return res.json(materialContrato);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.get('/material/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const materialContratos = await MaterialContratoService.getByMaterial(_id);
    if (!materialContratos) {
      return res.status(404).send();
    }
    return res.json(materialContratos);
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
    const materialContratos = await MaterialContratoService.getByContract(_id);
    if (!materialContratos) {
      return res.status(404).send();
    }
    return res.json(materialContratos);
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
    await MaterialContratoService.delete(_id);
    return res.status(204).send();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const {
      quantidade_solicitada,
      quantidade_utilizada,
      quantidade_devolvida,
      data_entrega,
      data_devolucao,
      observacao,
      id_contrato_geral,
      id_material,
    } = req.body;
    const { id } = req.params;
    const _id = Number(id);
    if (Number.isNaN(_id) || !Number.isInteger(_id)) {
      return res.status(400).json({ message: 'Id inválido!' });
    }
    const materialContrato = await MaterialContratoService.update(
      _id,
      quantidade_solicitada,
      quantidade_utilizada,
      quantidade_devolvida,
      data_entrega,
      data_devolucao,
      observacao,
      id_contrato_geral,
      id_material,
    );
    return res.json(materialContrato);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error });
  }
});

export default router;
