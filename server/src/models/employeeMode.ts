/**
 * * This page is for Employee related models
 */

// Mongoose module import for creating mongodb schema
import mongoose, { Schema, Document } from "mongoose";

/**
 * * UsersMaster model schema creation Code Start
 */

// Interface type for employee model
export interface IEmployeeMaster {
  empCode: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  altMobileNumber?: string;
  email: string;
  dob: Date;
  uuid: string;
  profilePhoto: string;
  isActive: boolean;
}

// Interface for employee model.
export interface IEmployeeMasterModel extends IEmployeeMaster, Document {}

// Schema generation for employee master model
const EmployeeMasterSchema: Schema = new Schema({
  empCode: { type: String, required: false },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  mobileNumber: { type: String, required: true },
  altMobileNumber: { type: String, required: false },
  email: { type: String, required: true },
  dob: { type: Date, required: true },
  uuid: { type: String, required: true },
  aadharNo: { type: String, required: true },
  panNo: { type: String, required: true },
  isActive: { type: Boolean, required: true },
});

/**
 * * UsersMaster model schema creation Code End
 */

/**
 * Model creation based on Interface and Schema
 * @EmployeeMasterModel This object contain model related to EmployeeMaster collection.
 */

const EmployeeMasterModel = mongoose.model<IEmployeeMasterModel>(
  "employee_master",
  EmployeeMasterSchema
);

// Export object for external use
export { EmployeeMasterModel };
