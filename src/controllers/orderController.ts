import { Request, Response } from "express";
import Order from "../models/orderModel";

export const getOrder = async (req: Request, res: Response) => { 
    try {
        if (req.body) {
            const order = await Order.findById(req.params.id)
            order ? res.status(200).send(order) : res.status(404).send("Order not found")   
        }
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const createOrder = async (req: Request, res: Response) => { 
    try {
        if (req.body) {
            const order = new Order(req.body)
            await order.save()
            res.status(201).send(order)
        }
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}