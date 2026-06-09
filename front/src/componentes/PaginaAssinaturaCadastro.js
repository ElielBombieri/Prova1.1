import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { get, post, put } from "../servicos/api";

function PaginaAssinaturaCadastro() {
    const navegador = useNavigate();
    const { id } = useParams();

    //criar um use state para cada campo do formulário
    const [cliente, setCliente] = useState('');
    const [dataInicio, setDataInicio] = useState('');
    const [planoId, setPlanoId] = useState('');
    const [planos, setPlanos] = useState([]);

    const voltar = () => {
        navegador('/assinaturas');
    }

    const salvar = async () => {
        if (id) {
            alterar();
        }
        else {
            inserir();
        }
    }

    const inserir = async () => {
        const objeto = {
            "cliente": cliente,
            "data_inicio": dataInicio,
            "plano_id": planoId
        }

        try {
            await post('Assinatura', objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const alterar = async () => {
        const objeto = {
            "cliente": cliente,
            "data_inicio": dataInicio,
            "plano_id": planoId
        }

        try {
            await put('Assinatura/' + id, objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const selecionar = async () => {
        try {
            const resposta = await get('Assinatura/' + id);
            setCliente(resposta.cliente);
            setDataInicio(resposta.data_inicio);
            setPlanoId(resposta.plano_id);
        } catch (error) {

        }
    }

    const listarPlanos = async () => {
        try {
            const resposta = await get('Planos');
            setPlanos(resposta);
        } catch (error) {

        }
    }

    useEffect(() => {
        listarPlanos();
        if (id)
            selecionar();
    }, []);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow border-0">
                        <div className="card-header bg-primary text-white py-3">
                            <h5 className="mb-0">Dados da nova Assinatura</h5>
                        </div>
                        <div className="card-body p-4">
                            <>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Cliente</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setCliente(e.target.value)}
                                        value={cliente}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold">Data de início</label>
                                        <input
                                            type="date"
                                            className="form-control"
                                            required=""
                                            placeholder=""
                                            onChange={(e) => setDataInicio(e.target.value)}
                                            value={dataInicio}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold">Plano</label>
                                        <select className="form-select"
                                            onChange={(e) => setPlanoId(e.target.value)}
                                            value={planoId}>
                                            <option value="">Selecione...</option>
                                            {planos.map((p, i) => (
                                                <option value={p.id}>{p.nome}</option>
                                            ))}
                                        </select>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between">
                                    <a onClick={(e) => voltar()} className="btn btn-link text-muted">
                                        Voltar para a lista
                                    </a>
                                    <button onClick={(e) => salvar()} className="btn btn-primary px-5">
                                        Salvar
                                    </button>
                                </div>
                            </>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginaAssinaturaCadastro;
