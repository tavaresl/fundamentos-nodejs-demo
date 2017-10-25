'use strict'

import { abreConexao, fechaConexao } from '../../config/connection.config.mjs'

export function insere(livro, callback) {
  const query = 'INSERT INTO livro SET titulo=?, lancamento=?, autor=?'
  const valores = [ livro.titulo, livro.lancamento, livro.autor ]

  abreConexao().query(query, valores, (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function listaTodos(callback) {
  abreConexao().query('SELECT * FROM livro', (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function lista(id, callback) {
  const query = 'SELECT * FROM livro WHERE id=?'

  abreConexao().query(query, [id], (erro , resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function atualiza(livro, dados, callback) {
  const query = 'UPDATE livro SET titulo=?, lancamento=?, autor=? WHERE id=?'
  const valores = [ dados.titulo, dados.lancamento, dados.autor, livro ]

  abreConexao().query(query, valores, (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}

export function deleta(id, callback) {
  const query = 'DELETE FROM livro WHERE id=?'

  abreConexao().query(query, [id], (erro, resultados) => {
    fechaConexao()
    callback(erro, resultados)
  })
}
