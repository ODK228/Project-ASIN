
const express = require('express');
const router = express.Router();
const DepartmentsControllers = require('../Controller/Users');

router.post('/', DepartmentsControllers.createDepartment);
router.get('/', DepartmentsControllers.getAllDepartments);
router.get('/:id', DepartmentsControllers.getDepartmentById);
router.put('/:id', DepartmentsControllers.updateDepartment);
router.delete('/:id', DepartmentsControllers.deleteDepartment);

module.exports = router;
