const express = require('express')

const router = express.Router();

const peopleController = require('../controllers/people')

router.get('/people', peopleController.testPerson)
router.get('/people-list', peopleController.getAll)
router.get('/people/:id', peopleController.getPerson)
router.put('/people/:id', peopleController.updatePerson)
router.post('/people', peopleController.newPerson)
router.delete('/people/:id', peopleController.deletePerson)

module.exports = router