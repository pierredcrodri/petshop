import { Request, Response } from "express";
import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
    let query = req.query.q as string;
    let pets = Pet.getFromName(query)
    res.render("pages/page", {
        pets,
        query,
        menu: createMenuObject(""),
    })
};
