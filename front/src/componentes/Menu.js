function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
            <div className="container">
                <a className="navbar-brand fw-bold" href="/">
                    <i className="bi bi-card-checklist me-2" />
                    Sistema de Assinaturas
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="nav-link active" href="/">
                                Início
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/planos">
                                Planos
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/assinaturas">
                                Assinaturas
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
