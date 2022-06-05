import express, { Router } from "express";
import { Request, Response } from "express";
import * as response from "../../network/response";
import * as controller from "./controller";

const router: Router = express.Router();

router.get("/:endpoint", (req: Request, res: Response) => {
  const fibonacciNumber = controller.fibonacci(Number(req.params.endpoint));
  response.success(req, res, fibonacciNumber.toString(), 200);
});

export { router };
