import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Criar() {
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' })
  const navigate = useNavigate()

  async function cadastrarFilme(e) {
    e.preventDefault()
    await api.post('/filmes', values)
    navigate('/')
  }

  return (
    <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
      <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
        <h2 className="mb-4">Novo Filme</h2>
        <form onSubmit={cadastrarFilme}>
          <div className="mb-3">
            <label>Nome:</label>
            <input type="text" className="form-control"
              placeholder="Nome do filme"
              onChange={e => setValues({ ...values, nome: e.target.value })} />
          </div>
          <div className="mb-3">
            <label>Gênero:</label>
            <input type="text" className="form-control"
              placeholder="Gênero"
              onChange={e => setValues({ ...values, genero: e.target.value })} />
          </div>
          <div className="mb-3">
            <label>Ano:</label>
            <input type="text" className="form-control"
              placeholder="Ano"
              onChange={e => setValues({ ...values, ano: e.target.value })} />
          </div>
          <button className="btn btn-success me-2">Criar</button>
          <button type="button" className="btn btn-secondary"
            onClick={() => navigate('/')}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}

export default Criar