import { Request, Response } from "express";

export const search = (req: Request, res: Response) => {
  res.status(200).send("/search");
};
