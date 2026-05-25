import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import api from '../services/api'

function Inicio() {
  const [filmes, setFilmes] = useState([])
  const [carregando, setCarregando] = useState(true)

  useEffect(() => {
    api.get('/filmes')
      .then(res => setFilmes(res.data))
      .catch(err => console.log(err))
      .finally(() => setCarregando(false))
  }, [])

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Lista de Filmes</h1>

      {carregando && <p className="text-center">Carregando...</p>}

      <table className="table table-striped table-hover shadow">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Detalhes</th>
          </tr>
        </thead>
        <tbody>
          {filmes.map(filme => (
            <tr key={filme.id}>
              <td>{filme.id}</td>
              <td>{filme.nome}</td>
              <td>
                <Link to={`/ler/${filme.id}`} className="btn btn-sm btn-info">
                  Ver detalhes
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Inicio