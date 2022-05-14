const express = require('express')
const route = require('./route')
const path = require('path')
const server = express()

server.set('view engine', 'ejs')

server.use(express.static('public'))
//path = caminho do arquivo
//_dirname = recebe o nome da pasta onde o arquivo se encontra
server.set('views', path.join(__dirname, 'views'))

server.use(express.urlencoded({ extended: true }))

server.use(route)

server.listen(3000, () => console.log('RODANDO'))
