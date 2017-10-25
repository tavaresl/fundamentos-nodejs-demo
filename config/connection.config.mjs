'use strict'

import mysql from 'mysql'

let conexao = null

export function abreConexao() {
  conexao = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: 'root',
    database: 'livros_api'
  })

  return conexao
}

export function fechaConexao() {
  conexao.end()
}
