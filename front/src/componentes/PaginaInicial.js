function PaginaInicial() {
    return (
        <div className="container my-5">
            <div className="p-5 mb-4 bg-light rounded-3 shadow-sm text-center">
                <h1 className="mb-3">
                    <i className="bi bi-card-checklist me-2" />
                    Sistema de Assinaturas
                </h1>
                <p className="lead text-muted">
                    Gerencie os planos de assinatura e os clientes assinantes em um só lugar.
                </p>
            </div>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body text-center p-4">
                            <i className="bi bi-list-check display-4 text-primary mb-3" />
                            <h5 className="card-title">Planos</h5>
                            <p className="card-text text-muted">
                                Cadastre e gerencie os planos disponíveis, com seus valores e durações.
                            </p>
                            <a href="/planos" className="btn btn-primary px-4">
                                Acessar Planos
                            </a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100 shadow-sm border-0">
                        <div className="card-body text-center p-4">
                            <i className="bi bi-person-check display-4 text-primary mb-3" />
                            <h5 className="card-title">Assinaturas</h5>
                            <p className="card-text text-muted">
                                Cadastre clientes assinantes e acompanhe a validade de cada assinatura.
                            </p>
                            <a href="/assinaturas" className="btn btn-primary px-4">
                                Acessar Assinaturas
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PaginaInicial;
