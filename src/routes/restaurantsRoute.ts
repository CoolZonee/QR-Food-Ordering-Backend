import express from "express"
import Restaurant, { IRestaurant } from "../models/restaurantModel"

const router = express.Router()

router.get("/", async (req, res) => {
    try {
        const restaurants: Array<IRestaurant> = await Restaurant.find()
        restaurants.length > 0 ? res.status(200).send(restaurants) : res.status(404).send("Restaurants not found")
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
})

router.post("/", async (req, res) => {
    try {
        const restaurant = new Restaurant(req.body)
        await restaurant.save()
        res.status(201).send(restaurant)
    }
    catch (error: any) {
        res.status(400).send(error.message)
    }
})

export { router as restaurantsRouter }