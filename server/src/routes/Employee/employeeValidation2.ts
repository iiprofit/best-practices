const { body } = require("express-validator");
const validator = require("validator");

let employeeCreate = () => {
  return [
    body("empCode")
      .notEmpty()
      .withMessage("Employee code is required.")
      .isLength({ min: 1, max: 10 })
      .withMessage("Employee code is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("firstName")
      .notEmpty()
      .withMessage("First name is required.")
      .isLength({ min: 3, max: 25 })
      .withMessage("First name is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("lastName")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 3, max: 25 })
      .withMessage("Lastname length should be between 3 and 25 characters.")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("mobileNumber")
      .notEmpty()
      .withMessage("Mobile number is required.")
      .isLength({ min: 10, max: 10 })
      .withMessage("Mobile number is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("altMobileNumber")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 10, max: 10 })
      .withMessage("Alternate mobile number is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("email")
      .notEmpty()
      .withMessage("Email address is required")
      .isEmail()
      .withMessage("Email address is not valid")
      .isLength({ min: 3, max: 30 })
      .withMessage("Address field length is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("dob")
      .notEmpty()
      .withMessage("Birthdate is required")
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("aadharNo")
      .notEmpty()
      .withMessage("Aadhar card number is required.")
      .isLength({ min: 3, max: 25 })
      .withMessage("Aadhar card number is not Valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("panNo")
      .notEmpty()
      .withMessage("PAN number is required.")
      .isLength({ min: 3, max: 10 })
      .withMessage("PAN number is not Valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("isActive")
      .notEmpty()
      .withMessage("isActive is required")
      .isNumeric()
      .withMessage("isActive must be numeric")
      .isLength({ min: 1, max: 1 })
      .withMessage("isActive length is invalid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),
  ];
};

let employeeUpdate = () => {
  return [
    body("empCode")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 1, max: 10 })
      .withMessage("Employee code is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("firstName")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 3, max: 25 })
      .withMessage("First name is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("lastName")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 3, max: 25 })
      .withMessage("Lastname length should be between 3 and 25 characters.")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("mobileNumber")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 10, max: 10 })
      .withMessage("Mobile number is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("altMobileNumber")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 10, max: 10 })
      .withMessage("Alternate mobile number is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("email")
      .optional({ checkFalsy: true, nullable: true })
      .isEmail()
      .withMessage("Email address is not valid")
      .isLength({ min: 3, max: 30 })
      .withMessage("Address field length is not valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("dob")
      .optional({ checkFalsy: true, nullable: true })
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("aadharNo")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 3, max: 25 })
      .withMessage("Aadhar card number is not Valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("panNo")
      .optional({ checkFalsy: true, nullable: true })
      .isLength({ min: 3, max: 10 })
      .withMessage("PAN number is not Valid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),

    body("isActive")
      .optional({ checkFalsy: true, nullable: true })
      .isNumeric()
      .withMessage("isActive must be numeric")
      .isLength({ min: 1, max: 1 })
      .withMessage("isActive length is invalid")
      .trim()
      .customSanitizer((value: any) => {
        return validator.escape(value);
      }),
  ];
};

let employeeSchema = {
  employeeCreate,
  employeeUpdate
};

export default employeeSchema;
