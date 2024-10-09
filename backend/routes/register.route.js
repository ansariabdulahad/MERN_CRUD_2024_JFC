const express = require('express');
const { create, read, update, deleting } = require('../controllers/crud.controller');
const registerSchema = require('../validators/register.validator');
const zodValidation = require('../middlewares/zodValidator.middleware');

const router = express.Router();

router.post('/create', zodValidation(registerSchema), create);
router.get('/', read);
router.put('/:id', update);
router.delete('/:id', deleting);

module.exports = router;