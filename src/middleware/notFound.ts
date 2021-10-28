import { Request, Response } from "express";

const notFound = (request: Request, response: Response): Response => {
  return response.status(404).json({
    success: {},
    error: {
      code: 404,
      message: "Not found",
    },
  });
};
export default notFound;
