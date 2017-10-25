'use strict'

import http from 'http'
import app from './config/app.config.mjs'

const servidor = http.createServer(app)
servidor.listen(3000, () => console.log('Servidor rodando na porta 3000'))
