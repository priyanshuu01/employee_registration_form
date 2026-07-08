const express = require("express");
const router = express.Router();

const upload = require("../middleware/upload");
const { employeeValidation } = require("../middleware/validation");
const {
  createEmployee,
  getEmployees,
  updateEmployee,
  deleteEmployee
} = require("../controllers/employeeController");

router.post(
  "/",
  upload.single("photo"),
  employeeValidation,
  createEmployee
);

router.get("/", getEmployees);
router.put("/:id", updateEmployee);
router.delete("/:id", deleteEmployee);

module.exports = router;