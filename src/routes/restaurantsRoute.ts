import express from "express"
import Restaurant from "../models/restaurantModal"

const router = express.Router()

router.get("/api/restaurant", async (req, res) => {
    console.log("Getting all restaurants")
    const restaurants = await Restaurant.find()
    res.status(200).send(restaurants)
})

router.post("/api/restaurant", async (req, res) => {
    const restaurant = new Restaurant(req.body)
    await restaurant.save()
    res.status(201).send(restaurant)
})

export { router as restaurantsRouter }