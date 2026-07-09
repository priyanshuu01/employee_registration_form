const express = require("express");

const router = express.Router();


const {

    createEmployee,
    getEmployees,
    getEmployeeById,
    updateEmployee,
    deleteEmployee

} = require("../controllers/employeeController");



// CREATE EMPLOYEE
router.post(
    "/",
    createEmployee
);



// GET ALL EMPLOYEES
router.get(
    "/",
    getEmployees
);



// GET SINGLE EMPLOYEE
router.get(
    "/:id",
    getEmployeeById
);



// UPDATE EMPLOYEE
router.put(
    "/:id",
    updateEmployee
);



// DELETE EMPLOYEE
router.delete(
    "/:id",
    deleteEmployee
);



module.exports = router;