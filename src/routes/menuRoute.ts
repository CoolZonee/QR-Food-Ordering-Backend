import express from "express"
import mongoose from "mongoose";
import Menu, { IMenu } from "../models/menuModel"

const router = express.Router()

router.get("/", async (req, res) => {
    const ObjectId = mongoose.Types.ObjectId; 
    try {
        const menu: Array<IMenu> = await Menu.find({ restaurant: new ObjectId(req.body.restaurant) })
        menu.length > 0 ? res.status(200).send(menu) : res.status(404).send("Menu not found")
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const menu = new Menu(req.body)
        await menu.save()
        res.status(201).send(menu)
    }
    catch (error: any) {
        res.status(400).send(error.message)
    } 
})

export { router as menuRouter }