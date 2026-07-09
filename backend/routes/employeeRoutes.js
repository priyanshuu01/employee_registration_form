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
const upload = require("../middleware/upload");



router.post(

"/",

upload.fields([

{
 name:"profilePhoto",
 maxCount:1
},

{
 name:"resume",
 maxCount:1
}

]),

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