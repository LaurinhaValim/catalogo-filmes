import { Link } from 'react-router-dom'
import './styles.css'

function Cabecalho() {
  return (
    <div className="cab-titulo">
      <span className="cab-logo">🎬 Catálogo de Filmes</span>
      <ul className="cab-nav">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/criar">Novo Filme</Link></li>
        <li><Link to="/alterar">Alterar</Link></li>
        <li><Link to="/apagar">Apagar</Link></li>
      </ul>
    </div>
  )
}

export default Cabecalho