/**
 * NOTE:
 * THIS PAGE CONTAIN CRUD OPERATION METHODS RELATED TO USER SECTION.
 */

// Experss functions for getting response from body.
import { NextFunction, Request, Response } from "express";

// Mongodb library module for database operations.
import mongoose from "mongoose";

// uuid v4 method import for uuid fields value.
import { v4 } from "uuid";

// ValidationnResult method import for checking express-validator's end result.
import { validationResult } from "express-validator";

/**
 * Custom Module Import Section
 * @EmployeeMasterModel This is mongoose model/schema of the employee section. It store basic details of the employees. This object will use for database operations.
 * @Logging This object is used for generating different types of Logs. We replace console logs with this custom utility.
 * @httpStatus This is helper section's object. It has pre-define error codes which we will re-use in this controller.
 * @getHandlerResponseObject This method is used to organize and send response back to the client. with the use of this method everytime we can send data in fix format.
 */
import { EmployeeMasterModel } from "../models/Index";
import Logging from "../middleware/Logging";
import { httpStatus, getHandlerResponseObject } from "../helper/Index";

// Create method for adding user into database
const createEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Create object for the express-validator result checking.
    const error = validationResult(req);

    // This if condition checked that any error occur or not.
    if (error.isEmpty()) {
      // Destructuring req.body object
      const {
        empCode,
        firstName,
        lastName,
        mobileNumber,
        altMobileNumber,
        email,
        aadharNo,
        panNo,
        dob,
        isActive,
      } = req.body;

      // Add/Create operation for UserMaster collection.
      const employee = new EmployeeMasterModel({
        _id: new mongoose.Types.ObjectId(),
        empCode,
        firstName,
        lastName,
        mobileNumber,
        altMobileNumber,
        email,
        uuid: v4(),
        aadharNo,
        panNo,
        dob,
        isActive,
      });
      let employeeMasterResult = await employee.save();

      // Return Response of the add/create operation
      const { code, data, message } = getHandlerResponseObject(
        true,
        httpStatus.OK,
        "Employee Details Added Successfully",
        employeeMasterResult
      );

      return res.status(code).json({ code, data, message });
    }
  } catch (error) {
    Logging.error(error);
  }
};

// get method for getting single user data based on given role id
const getSingleEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let employeeId: string = req.params.id;
    // Check is given role id is valid or not
    if (!mongoose.isValidObjectId(employeeId)) {
      const { code, data, message } = getHandlerResponseObject(
        false,
        httpStatus.Bad_Request,
        "Employee id is not valid"
      );
      return res.status(code).json({ code, message, data });
    }

    // Find single User data.
    let result = await EmployeeMasterModel.findById(employeeId);

    // Return Response of the find operation
    const { code, data, message } = getHandlerResponseObject(
      true,
      httpStatus.OK,
      "Single Employee details fetched successfully",
      result
    );
    return res.status(code).json({ code, message, data });
  } catch (error) {
    Logging.error(error);
  }
};

// get method for getting all Users from database
const getEmployees = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // find operation for EmployeeMaster collection.
    let result = await EmployeeMasterModel.find();

    // Return Response of the find operation
    const { code, data, message } = getHandlerResponseObject(
      true,
      httpStatus.OK,
      "Employees details fetched successfully",
      result
    );
    return res.status(code).json({ code, message, data });
  } catch (error) {
    Logging.error(error);
  }
};

// Update method for updating the employee details
const updateEmployee = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    // Get all data into this variable.
    const updatedEmployeeData = req.body;

    // Get role id from the params
    let employeeId: string = req.params.id;

    // Check is given role id is valid or not
    if (!mongoose.isValidObjectId(employeeId)) {
      const { code, data, message } = getHandlerResponseObject(
        false,
        httpStatus.Bad_Request,
        "Employee's id is not valid in role update operation"
      );
      return res.status(code).json({ code, message, data });
    }

    // Fetch employee based on role id
    const existingEmployee: any | null = await EmployeeMasterModel.findById(
      employeeId
    );

    // Check is role is available or not.
    if (!existingEmployee) {
      const { code, data, message } = getHandlerResponseObject(
        false,
        httpStatus.Not_Found,
        "Employee is not found"
      );
      return res.status(code).json({ code, message, data });
    }

    // update existing role object with updated column values
    Object.keys(updatedEmployeeData).forEach((key) => {
      existingEmployee[key] = updatedEmployeeData[key];
    });

    let result = await existingEmployee.save();

    // Check is role is available or not.
    if (!result) {
      const { code, data, message } = getHandlerResponseObject(
        false,
        httpStatus.Bad_Request,
        "Employee is not found"
      );
      return res.status(code).json({ code, message, data });
    }

    // Return Response of the add/create operation
    const { code, data, message } = getHandlerResponseObject(
      true,
      httpStatus.OK,
      "Employee Details Updated Successfully",
      result
    );
    return res.status(code).json({ code, message, data });
  } catch (error) {
    Logging.error;
  }
};

// Encapsulate all obect into single object
const EmployeeController = {
  createEmployee,
  getEmployees,
  getSingleEmployee,
  updateEmployee,
};
export default EmployeeController;
