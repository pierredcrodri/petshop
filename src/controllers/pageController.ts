import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
  res.status(200).send("/home");
};
export const dogs = (req: Request, res: Response) => {
  res.status(200).send("/dogs");
};
export const cats = (req: Request, res: Response) => {
  res.status(200).send("/cats");
};
export const fishes = (req: Request, res: Response) => {
  res.status(200).send("/fishes");
};
