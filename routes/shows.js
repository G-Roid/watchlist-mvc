const express = require('express')
const router = express.Router()
const showsController = require('../controllers/shows')

router.get('/', showsController.getShows)

router.post('/createTodo', showsController.createTodo)

router.put('/markComplete', showsController.markComplete)

router.put('/markIncomplete', showsController.markIncomplete)

router.delete('/deleteTodo', showsController.deleteTodo)

module.exports = router