import Plano from "../models/Plano.js"

async function readAllPlano(req, res) {
    const dados = await Plano.findAll();
    return res.json(dados);
}

async function readPlano(req, res) {
    const id = req.params.id;
    const dados = await Plano.findByPk(id);
    return res.json(dados);
}

async function createPlano(req, res) {
    const nome = req.body.nome;
    const valor = req.body.valor;
    const duracaoMeses = req.body.duracao_meses;
    const dados = await Plano.create({ nome: nome, valor: valor, duracao_meses: duracaoMeses });
    res.json(dados);
}

async function deletePlano(req, res) {
    const id = req.params.id;
    const dados = await Plano.destroy({ where: { id: id } });
    return res.json(dados);
}

async function updatePlano(req, res) {
    const id = req.params.id;
    const nome = req.body.nome;
    const valor = req.body.valor;
    const duracaoMeses = req.body.duracao_meses;
    const dados = await Plano.update({ nome: nome, valor: valor, duracao_meses: duracaoMeses }, { where: { id: id } });
    res.json(dados);
}

export default { readAllPlano, readPlano, createPlano, deletePlano, updatePlano };