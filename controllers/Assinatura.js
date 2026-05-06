import Assinatura from "../models/Assinatura.js"
import Plano from "../models/Plano.js";

async function readAllAssinatura(req, res) {
    const dados = await Assinatura.findAll();
    return res.json(dados);
}

async function readAssinatura(req, res) {
    const id = req.params.id;
    const dados = await Assinatura.findByPk(id);
    return res.json(dados);
}

async function createAssinatura(req, res) {
    const cliente = req.body.cliente;
    const plano_id = req.body.plano_id;
    const data_inicio = req.body.data_inicio;

    const plano = await Plano.findByPk(plano_id);

    if (!plano) {
        return res.status(404).json({ erro: "Plano não encontrado" });
    }

    const dataValidade = new Date(data_inicio);
    dataValidade.setMonth(dataValidade.getMonth() + plano.duracao_meses);

    const dados = await Assinatura.create({ cliente: cliente, plano_id: plano_id, data_inicio: data_inicio, data_validade: dataValidade });
    res.json(dados);
}

async function deleteAssinatura(req, res) {
    const id = req.params.id;
    const dados = await Assinatura.destroy({ where: { id: id } });
    return res.json(dados);
}

async function updateAssinatura(req, res) {
    const id = req.params.id;
    const cliente = req.body.cliente;
    const plano_id = req.body.plano_id;
    const data_inicio = req.body.data_inicio;

    const plano = await Plano.findByPk(plano_id);

    if (!plano) {
        return res.status(404).json({ erro: "Plano não encontrado" });
    }

    const dataValidade = new Date(data_inicio);
    dataValidade.setMonth(dataValidade.getMonth() + plano.duracao_meses);

    const dados = await Assinatura.update({ cliente: cliente, plano_id: plano_id, data_inicio: data_inicio, data_validade: dataValidade }, { where: { id: id } });
    res.json(dados);
}


export default { createAssinatura, readAllAssinatura, readAssinatura, deleteAssinatura, updateAssinatura }