import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import { get, post, put } from "../servicos/api";

function PaginaPlanoCadastro() {
    const navegador = useNavigate();
    const { id } = useParams();

    //criar um use state para cada campo do formulário
    const [nome, setNome] = useState('');
    const [valor, setValor] = useState('');
    const [duracaoMeses, setDuracaoMeses] = useState('');

    const voltar = () => {
        navegador('/planos');
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
            "nome": nome,
            "valor": valor,
            "duracao_meses": duracaoMeses
        }

        try {
            await post('Plano', objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const alterar = async () => {
        const objeto = {
            "nome": nome,
            "valor": valor,
            "duracao_meses": duracaoMeses
        }

        try {
            await put('Plano/' + id, objeto);
            voltar();
        } catch (error) {
            alert('Erro ao inserir: ' + error);
        }
    }

    const selecionar = async () => {
        try {
            const resposta = await get('Plano/' + id);
            setNome(resposta.nome);
            setValor(resposta.valor);
            setDuracaoMeses(resposta.duracao_meses);
        } catch (error) {

        }
    }

    useEffect(() => {
        if (id)
            selecionar();
    }, []);

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card shadow border-0">
                        <div className="card-header bg-primary text-white py-3">
                            <h5 className="mb-0">Dados do novo Plano</h5>
                        </div>
                        <div className="card-body p-4">
                            <>
                                <div className="mb-3">
                                    <label className="form-label fw-bold">Nome</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required=""
                                        placeholder=""
                                        onChange={(e) => setNome(e.target.value)}
                                        value={nome}
                                    />
                                </div>
                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold">Valor</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            required=""
                                            placeholder=""
                                            onChange={(e) => setValor(e.target.value)}
                                            value={valor}
                                        />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-bold">Duração (meses)</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            required=""
                                            placeholder=""
                                            onChange={(e) => setDuracaoMeses(e.target.value)}
                                            value={duracaoMeses}
                                        />
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

export default PaginaPlanoCadastro;
