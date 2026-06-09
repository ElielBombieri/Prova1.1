import Menu from './componentes/Menu';
import PaginaInicial from './componentes/PaginaInicial';
import PaginaPlanoLista from './componentes/PaginaPlanoLista';
import PaginaPlanoCadastro from './componentes/PaginaPlanoCadastro';
import PaginaAssinaturaLista from './componentes/PaginaAssinaturaLista';
import PaginaAssinaturaCadastro from './componentes/PaginaAssinaturaCadastro';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='/planos' element={<PaginaPlanoLista />} />
          <Route path='/plano' element={<PaginaPlanoCadastro />} />
          <Route path='/plano/:id' element={<PaginaPlanoCadastro />} />
          <Route path='/assinaturas' element={<PaginaAssinaturaLista />} />
          <Route path='/assinatura' element={<PaginaAssinaturaCadastro />} />
          <Route path='/assinatura/:id' element={<PaginaAssinaturaCadastro />} />
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
