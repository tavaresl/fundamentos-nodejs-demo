'use strict'

import * as controller from './autor.controller.mjs'

export function autorRoute(router) {
  router.route('/')
    .get(controller.listaAutores)
    .post(controller.criaAutor)

  router.route('/:id')
    .get(controller.listaAutor)
    .put(controller.atualizaAutor)
    .delete(controller.deletaAutor)

  return router
}
