
const express = require('express');
const router = express.Router();
const DepartmentsControllers = require('../Controller/Departments');


const authMiddleware = require('../middleware/auth');
const userNotFoundMiddleware = require('../middleware/userNotFound');

router.post('/', authMiddleware, userNotFoundMiddleware, DepartmentsControllers.createDepartment);
router.get('/', DepartmentsControllers.getAllDepartments);
router.get('/:id', DepartmentsControllers.getDepartmentById);
router.put('/:id', authMiddleware, userNotFoundMiddleware, DepartmentsControllers.updateDepartment);
router.delete('/:id', authMiddleware, userNotFoundMiddleware, DepartmentsControllers.deleteDepartment);

module.exports = router;
