'use strict'

import * as controller from './livro.controller.mjs'

export function livroRoute(router) {
  router.route('/')
    .get(controller.listaTodos)
    .post(controller.insereLivro)

  router.route('/:id')
    .get(controller.listaLivro)
    .put(controller.atualizaLivro)
    .delete(controller.deletaLivro)

  return router
}