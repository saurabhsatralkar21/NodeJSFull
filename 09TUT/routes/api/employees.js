const express = require("express");
const router = express.Router();
const path = require("path");
const employeesController = require("../../controllers/employeesControllers");


router.route("/")
    .get(employeesController.getAllEmployees)
    .post(employeesController.createNewEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmplyee);

    router.route("/:id")
        .get(employeesController.getEmployee);

module.exports = router;