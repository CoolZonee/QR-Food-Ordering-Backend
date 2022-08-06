import express from 'express';

const router = express.Router()

router.get("/api/foods", (req, res) => {
    return res.send("Getting foods...");
})

router.post("/api/foods", (req, res) => {
    return res.send("Creating foods...");
})

export { router as foodsRouter }