import { createMenu, getMenu } from './../controllers/menuController';
import express from "express"

const router = express.Router()

router.get('/', getMenu)
router.post('/', createMenu)

export { router as menuRouter }