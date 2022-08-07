import { getOrder, createOrder } from './../controllers/orderController';
import express from "express"

const router = express.Router()

router.get('/:id', getOrder)
router.post('/', createOrder)

export { router as orderRouter }