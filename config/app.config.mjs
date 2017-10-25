'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import { autorRoute } from '../app/autor/autor.route.mjs'
import { livroRoute } from '../app/livro/livro.route.mjs'

const app = express()
const Router = express.Router

app.use(bodyParser.json())
app.use('/autor', autorRoute(Router()))
app.use('/livro', livroRoute(Router()))

app.get('/home', (req,res) => res.render('index.ejs'))

export default app
