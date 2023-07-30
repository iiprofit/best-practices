const EmployeeCreateSchema = {
  empCode: {
    notEmpty: true,
    errorMessage: "Employee code is requred.",
    isLength: {
      options: {
        min: 1,
        max: 10,
      },
      errorMessgae: "Employee code is not valid",
    },
  },

  firstName: {
    notEmpty: true,
    errorMessage: "First name is required.",
    isLength: {
      options: {
        min: 3,
        max: 25,
      },
      errorMessage: "First name is not valid",
    },
  },

  lastName: {
    optional: {
      options: {
        checkFalsy: true,
        nullable: true,
      },
    },
    isLength: {
      options: { min: 3, max: 25 },
      errorMessage: "Lastname length should be between 3 and 25 characters.",
    },
  },
  mobileNumber: {
    notEmpty: true,
    errorMessage: "Mobile number is required.",
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
      errorMessage: "Mobile number is not valid",
    },
  },
  altMobileNumber: {
    optional: {
      options: {
        checkFalsy: true,
        nullable: true,
      },
    },
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
      errorMessage: "Alternate mobile number is not valid",
    },
  },
  email: {
    notEmpty: true,
    errorMessage: "Email address is required",
    isEmail: {
      errorMessage: "Email address is not valid",
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: "Address field lenght is not valid",
    },
  },
  dob: {
    notEmpty: true,
    errorMessage: "Birthdate is requrired",
  },
  aadharNo: {
    notEmpty: true,
    errorMessage: "Aadhar card number is required.",
    isLength: {
      options: {
        min: 3,
        max: 25,
      },
      errorMessage: "Aadhar card number is not Valid",
    },
  },
  panNo: {
    notEmpty: true,
    errorMessage: "PAN number is required.",
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: "PAN number is not Valid",
    },
  },
  isActive: {
    notEmpty: true,
    errorMessage: "isActive is required",
    isNumeric: {
      errorMessage: "isActive is Must Numeric",
    },
    isLength: {
      options: {
        min: 1,
        max: 1,
      },
      errorMessage: "isActive length is invalid",
    },
  },
};

const EmployeeUpdateSchema = {
  empCode: {
    notEmpty: true,
    errorMessage: "Employee code is requred.",
    isLength: {
      options: {
        min: 1,
        max: 10,
      },
      errorMessgae: "Employee code is not valid",
    },
  },

  firstName: {
    notEmpty: true,
    errorMessage: "First name is required.",
    isLength: {
      options: {
        min: 3,
        max: 25,
      },
      errorMessage: "First name is not valid",
    },
  },

  lastName: {
    optional: {
      options: {
        checkFalsy: true,
        nullable: true,
      },
    },
    isLength: {
      options: { min: 3, max: 25 },
      errorMessage: "Lastname length should be between 3 and 25 characters.",
    },
  },
  mobileNumber: {
    notEmpty: true,
    errorMessage: "Mobile number is required.",
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
      errorMessage: "Mobile number is not valid",
    },
  },
  altMobileNumber: {
    optional: {
      options: {
        checkFalsy: true,
        nullable: true,
      },
    },
    isLength: {
      options: {
        min: 10,
        max: 10,
      },
      errorMessage: "Alternate mobile number is not valid",
    },
  },
  email: {
    notEmpty: true,
    errorMessage: "Email address is required",
    isEmail: {
      errorMessage: "Email address is not valid",
    },
    isLength: {
      options: {
        min: 3,
        max: 30,
      },
      errorMessage: "Address field lenght is not valid",
    },
  },
  dob: {
    notEmpty: true,
    errorMessage: "Birthdate is requrired",
  },
  aadharNo: {
    notEmpty: true,
    errorMessage: "Aadhar card number is required.",
    isLength: {
      options: {
        min: 3,
        max: 25,
      },
      errorMessage: "Aadhar card number is not Valid",
    },
  },
  panNo: {
    notEmpty: true,
    errorMessage: "PAN number is required.",
    isLength: {
      options: {
        min: 3,
        max: 10,
      },
      errorMessage: "PAN number is not Valid",
    },
  },
  isActive: {
    notEmpty: true,
    errorMessage: "isActive is required",
    isNumeric: {
      errorMessage: "isActive is Must Numeric",
    },
    isLength: {
      options: {
        min: 1,
        max: 1,
      },
      errorMessage: "isActive length is invalid",
    },
  },
};

const EmployeeSchema = {
  EmployeeCreateSchema,
  EmployeeUpdateSchema
};

export default  EmployeeSchema;
