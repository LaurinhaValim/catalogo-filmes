import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cabecalho from './componentes/Cabecalho'
import Inicio from './componentes/Inicio'
import Criar from './componentes/Criar'
import Ler from './componentes/Ler'
import Alterar from './componentes/Alterar'
import Apagar from './componentes/Apagar'
import 'bootstrap/dist/css/bootstrap.min.css'
import './componentes/styles.css'

function App() {
  return (
    <BrowserRouter>
      <Cabecalho />
      <Routes>
        <Route path='/' element={<Inicio />} />
        <Route path='/criar' element={<Criar />} />
        <Route path='/ler/:id' element={<Ler />} />
        <Route path='/alterar' element={<Alterar />} />
        <Route path='/apagar' element={<Apagar />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App