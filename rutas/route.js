const express = require('express')
const router = express.Router()
const {inicioGET, agregarNotaGET, editarNotaGET, agregarNotaPOST, editarNotaPOST, borrarNotaGET} =  require('../controladores/controller')


router.get('/', inicioGET )
router.get('/agregar-nota', agregarNotaGET)
router.get('/editar-nota/:id', editarNotaGET)
router.post('/agregar-nota', agregarNotaPOST)
router.post('/editar-nota/:id', editarNotaPOST)
router.get('/borrar-nota/:id', borrarNotaGET)

module.exports =  router;