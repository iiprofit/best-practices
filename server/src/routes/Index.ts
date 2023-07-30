/**
 * This is the Router Index file.
 * Because of this file we dont need to import specific Route file at specific page we just need to import this file and
 * we can access all the Routes.
 * All routes object will import here and we will export them as single object so we can use them  easily in the application
 *
 */

// Import express module which is used for Routes creation
import { Router, Request, Response } from "express";
//Create Router object using express router method
const router = Router();

/**
 * Import Custom Modules
 * @httpStatus This module contain all type of http status code which we can use in this page
 * @EmployeeRouter This module contains all the user specific routes
 */
import { EmployeeRouter } from "./employeeRoutes"
import httpStatus from "../helper/http_status";

// Add the UserRoutes into the application
router.use(EmployeeRouter)


// Bad Request
// If any request comes which is not defined in our system then that request will server as bad request and following code will be execute
router.all("*", (req: Request, res: Response) => {
    res.status(httpStatus.Bad_Request).json({
      code: httpStatus.Bad_Request,
      message: "Bad Request - Url not found",
    });
  });
  
  // Export entire router object so we can use this in the application
  export { router as routerV1 };