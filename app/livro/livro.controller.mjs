'use strict'

import * as dao from './livro.dao.mjs'

// POST: /livro
export function insereLivro(req, res) {
  const livro = req.body

  dao.insere(livro, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.status(201).json(resultados.insertId)
    }
  })
}

// GET: /livro
export function listaTodos(req, res) {
  dao.listaTodos((erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.json(resultados)
    }
  })
}

// GET: /livro/:id
export function listaLivro(req, res) {
  const livro = req.params.id
  
  dao.lista(livro, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.json(resultados[0])
    }
  })
}

// PUT: /livro/:id
export function atualizaLivro(req, res) {
  const livro = req.params.id
  const dados = req.body

  dao.atualiza(livro, dados, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.json(resultados.affectedRows)
    }
  })
}

// DELETE: /livro/:id
export function deletaLivro(req, res) {
  const livro = req.params.id

  dao.deleta(livro, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.status(204).json(resultados.affectedRows)
    }
  })
}
