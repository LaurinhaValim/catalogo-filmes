import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../services/api'

function Alterar() {
  const [idBusca, setIdBusca] = useState('')
  const [filme, setFilme] = useState(null)
  const [naoEncontrado, setNaoEncontrado] = useState(false)
  const [values, setValues] = useState({ nome: '', genero: '', ano: '' })
  const navigate = useNavigate()

  function buscarFilme() {

  setNaoEncontrado(false)
  setFilme(null)

  api.get(`/filmes/${idBusca}`)
    .then(res => {

      setFilme(res.data)

      setValues({
        nome: res.data.nome,
        genero: res.data.genero,
        ano: res.data.ano
      })

    })

    .catch(() => {
      setNaoEncontrado(true)
    })
}

  function alterarFilme(e) {
    e.preventDefault()
    api.put(`/filmes/${filme.id}`, values)
      .then(() => navigate('/'))
      .catch(err => console.log(err))
  }

 
  if (!filme && !naoEncontrado) {
    return (
      <div className="d-flex w-100 vh-100 justify-content-center align-items-center bg-light">
        <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
          <h2 className="mb-4">Alterar Filme</h2>
          <label>Digite o ID do filme:</label>
          <input
            type="text"
            className="form-control mb-3"
            value={idBusca}
            onChange={e => setIdBusca(e.target.value)}
          />
          <button className="btn btn-primary me-2" onClick={buscarFilme}>Procurar</button>
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
        <h2 className="mb-4">Editar Filme (ID: {filme.id})</h2>
        <form onSubmit={alterarFilme}>
          <div className="mb-3">
            <label>Nome:</label>
            <input type="text" className="form-control"
              value={values.nome}
              onChange={e => setValues({ ...values, nome: e.target.value })} />
          </div>
          <div className="mb-3">
            <label>Gênero:</label>
            <input type="text" className="form-control"
              value={values.genero}
              onChange={e => setValues({ ...values, genero: e.target.value })} />
          </div>
          <div className="mb-3">
            <label>Ano:</label>
            <input type="text" className="form-control"
              value={values.ano}
              onChange={e => setValues({ ...values, ano: e.target.value })} />
          </div>
          <button className="btn btn-success me-2">Alterar</button>
          <button type="button" className="btn btn-secondary"
            onClick={() => navigate('/')}>Cancelar</button>
        </form>
      </div>
    </div>
  )
}

export default Alterar