import { Request, Response } from "express";
import Restaurant, { IRestaurant } from "../models/restaurantModel";

export const getRestaurant = async (req: Request, res: Response) => { 
    try {
        const restaurant = await Restaurant.findById(req.params.id)
        restaurant ? res.status(200).send(restaurant) : res.status(404).send("Restaurant not found")
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const getRestaurants = async (req: Request, res: Response) => { 
    try {
        const restaurants: Array<IRestaurant> = await Restaurant.find()
        restaurants.length > 0 ? res.status(200).send(restaurants) : res.status(404).send("Restaurants not found")
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}

export const createRestaurant = async (req: Request, res: Response) => { 
    try {
        if (req.body) {
            const restaurant = new Restaurant(req.body)
            await restaurant.save()
            res.status(201).send(restaurant)
        }
        res.status(400).send("Body Not Found")
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
}