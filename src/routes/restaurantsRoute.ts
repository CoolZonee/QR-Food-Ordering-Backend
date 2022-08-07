import { getRestaurant, getRestaurants, createRestaurant } from './../controllers/restaurantController';
import express from "express"

const router = express.Router()

router.get("/", getRestaurants)
router.get("/:id", getRestaurant)
router.post("/", createRestaurant)

export { router as restaurantsRouter }