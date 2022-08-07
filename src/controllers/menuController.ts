import mongoose from "mongoose";
import { Request, Response } from "express";
import Menu from "../models/menuModel";

export const getMenu = async (req: Request, res: Response) => { 
    const ObjectId = mongoose.Types.ObjectId; 
    try {
        if (req.body) {
            const menu = await Menu.findOne({ restaurant: new ObjectId(req.body.restaurant) })
            menu ? res.status(200).send(menu) : res.status(404).send("Menu not found")   
        }
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const createMenu = async (req: Request, res: Response) => { 
    try {
        if (req.body) {
            const menu = new Menu(req.body)
            await menu.save()
            res.status(201).send(menu)
        }
        res.status(400).send("Body Not Found")
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}