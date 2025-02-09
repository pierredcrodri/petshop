import { Request, Response } from "express";
import { Pet } from "../models/Pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
  let pets = Pet.getAll();

  res.render("pages/page", {
    pets,
    menu: createMenuObject("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
  });
};
export const dogs = (req: Request, res: Response) => {
  let pets = Pet.getFromType("dog");
  res.render("pages/page", {
    pets,
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
  });
};
export const cats = (req: Request, res: Response) => {
  let pets = Pet.getFromType("cat");
  res.render("pages/page", {
    pets,
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
  });
};
export const fishes = (req: Request, res: Response) => {
  let pets = Pet.getFromType("fish");
  res.render("pages/page", {
    pets,
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
  });
};
