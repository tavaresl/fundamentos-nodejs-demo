'use strict'

import { abreConexao, fechaConexao } from "../../config/connection.config.mjs"

export function insere(autor, callback) {
  const query = 'INSERT INTO autor SET nome=?, email=?'
  const valores = [ autor.nome , autor.email ]

  abreConexao().query(query, valores, (erro, results) => {
    fechaConexao()
    callback(erro, results)
  })
}

export function listaTodos(callback) {
  abreConexao().query('SELECT * FROM autor', (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function lista(id, callback) {
  const query = 'SELECT * FROM autor WHERE id=?'

  abreConexao().query(query, [id], (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function atualiza(autor, dados, callback) {
  const query = 'UPDATE autor SET nome=?, email=? WHERE id=?'
  const valores = [ dados.nome, dados.email, autor ]

  abreConexao().query(query, valores, (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function deleta(autor, callback) {
  const query = 'DELETE FROM autor WHERE id=?'

  abreConexao().query(query, [autor], (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}
