'use strict'

import * as dao from './autor.dao.mjs'

// POST: /autor
export function criaAutor(req, res) {
  const autor = req.body

  dao.insere(autor, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.status(201).json(resultados.insertId)
    }
  })
}

// get: /autor
export function listaAutores(req, res) {
  dao.listaTodos((erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.json(resultados)
    }
  })
}

// GET: /autor/:id
export function listaAutor(req, res) {
  const id = req.params.id

  dao.lista(id, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.json(resultados[0])
    }
  })
}

// PUT: /autor/:id
export function atualizaAutor(req, res) {
  const autor = req.params.id
  const dados = req.body

  dao.atualiza(autor, dados, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.json(resultados.affectedRows)
    }
  })
}

// DELETE: /autor/:id
export function deletaAutor(req, res) {
  const autor = req.params.id

  dao.deleta(autor, (erro, resultados) => {
    if (erro) {
      res.sendStatus(422)
    } else {
      res.status(204).json(resultados.affectedRows)
    }
  })
}
