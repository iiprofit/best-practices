/**
 * This Page is used to create User Specific Routes
 */

// Express module import for router class generation
import express from "express";

// User controller import for connecting specific route to specific method
import { EmployeeController } from "../controller/Index"

// user validation schema import

// Express validator import
import { checkSchema } from "express-validator";

// Create Employee Router object using express module
const EmployeeRouter = express.Router();

// Route for create employee
EmployeeRouter.post("/employee", EmployeeController.createEmployee);

// Route for get single employee
EmployeeRouter.get("/employee/:id", EmployeeController.getSingleEmployee);

// Route for getting all employees
EmployeeRouter.get("/employee", EmployeeController.getEmployees);

// Route for update roles
EmployeeRouter.put("/employee/:id", EmployeeController.updateEmployee);



// Export Entire user route which will latter used in the application
export { EmployeeRouter };
