import { Request, Response } from "express";

const isUserRegistered = (name: string) => {
  //todo check if user is registered
  return false;
};

export const authRegister = (
  request: Request,
  response: Response
): Response => {
  const { name, password } = request.body;

  if (!name || !password) {
    return response.status(400).json({
      success: {},
      error: {
        code: 400,
        message: "Missing values",
      },
    });
  }

  if (isUserRegistered(name)) {
    return response.status(409).json({
      success: {},
      error: {
        code: 409,
        message: "User already exists (" + name + ")",
      },
    });
  }

  //todo register user
  return response.status(201).json({
    success: {
      code: 201,
      message: "User created",
      data: {
        name,
        password,
      },
    },
    error: {},
  });
};
