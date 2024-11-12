import { Request, Response } from "express";

const asyncHandler = (
  handler: (req: Request, res: Response) => Promise<any>
) => {
  return async (req: Request, res: Response) => {
    try {
      await handler(req, res);
    } catch (error: any) {
      console.error(error);

      if (error.name === "ValidationError") {
        res.status(400).json({
          success: false,
          message: error.errors.title.message,
        });
      } else {
        res.status(500).json({
          success: false,
          message: "Something went wrong, please try again",
        });
      }
    }
  };
};

export default asyncHandler;
