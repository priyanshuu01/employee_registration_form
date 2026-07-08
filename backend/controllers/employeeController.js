const Employee = require("../models/Employee");
const { validationResult } = require("express-validator");

// CREATE
exports.createEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const employee = new Employee({
      ...req.body,
      photo: req.file ? req.file.filename : null
    });

    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// READ
exports.getEmployees = async (req, res) => {
  const data = await Employee.find();
  res.json(data);
};

// UPDATE
exports.updateEmployee = async (req, res) => {
  const updated = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.json(updated);
};

// DELETE
exports.deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};