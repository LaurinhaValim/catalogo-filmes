import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import api from '../services/api'

function Ler() {
  const { id } = useParams()
  const [filme, setFilme] = useState(null)

  useEffect(() => {
    api.get(`/filmes/${id}`)
      .then(res => setFilme(res.data))
      .catch(err => console.log(err))
  }, [])

  if (!filme) return <p className="text-center mt-5">Carregando...</p>

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">Detalhes do Filme</h2>
        <p><strong>ID:</strong> {filme.id}</p>
        <p><strong>Nome:</strong> {filme.nome}</p>
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p><strong>Ano:</strong> {filme.ano}</p>
        <Link to="/" className="btn btn-secondary mt-3">Cancelar</Link>
      </div>
    </div>
  )
}

export default Ler