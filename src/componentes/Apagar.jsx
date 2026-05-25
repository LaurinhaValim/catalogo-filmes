import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Apagar() {
  const [idBusca, setIdBusca] = useState('')
  const [filme, setFilme] = useState(null)
  const [naoEncontrado, setNaoEncontrado] = useState(false)
  const navigate = useNavigate()

  function buscarFilme() {
    setNaoEncontrado(false)
    setFilme(null)
    api.get(`/filmes/${idBusca}`)
      .then(res => setFilme(res.data))
      .catch(() => setNaoEncontrado(true))
  }

  function apagarFilme() {
    const confirmar = window.confirm('Tem certeza que quer apagar este filme?')
    if (confirmar) {
      api.delete(`/filmes/${filme.id}`)
        .then(() => navigate('/'))
        .catch(err => console.log(err))
    }
  }


  if (!filme && !naoEncontrado) {
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h2 className="mb-4">Apagar Filme</h2>
          <label>Digite o ID do filme:</label>
          <input
            type="text"
            className="form-control mb-3"
            value={idBusca}
            onChange={e => setIdBusca(e.target.value)}
          />
          <button className="btn btn-danger me-2" onClick={buscarFilme}>Procurar</button>
          <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
        </div>
      </div>
    )
  }

 
  if (naoEncontrado) {
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded text-center">
          <h2>Filme não encontrado</h2>
          <button className="btn btn-secondary mt-3"
            onClick={() => { setNaoEncontrado(false); setIdBusca('') }}>
            Voltar
          </button>
        </div>
      </div>
    )
  }


  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">Confirmar Exclusão</h2>
        <p><strong>ID:</strong> {filme.id}</p>
        <p><strong>Nome:</strong> {filme.nome}</p>
        <p><strong>Gênero:</strong> {filme.genero}</p>
        <p><strong>Ano:</strong> {filme.ano}</p>
        <button className="btn btn-danger me-2" onClick={apagarFilme}>Apagar</button>
        <button className="btn btn-secondary" onClick={() => navigate('/')}>Cancelar</button>
      </div>
    </div>
  )
}

export default Apagar