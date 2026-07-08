const { body } = require("express-validator");

exports.employeeValidation = [
  body("name").notEmpty().withMessage("Name required"),
  body("email").isEmail().withMessage("Invalid email")
];