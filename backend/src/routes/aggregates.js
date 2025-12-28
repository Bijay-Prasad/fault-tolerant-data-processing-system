import express from "express";
import ProcessedEvent from "../models/ProcessedEvent.js";

const router = express.Router();

router.get("/", async (req, res) => {
    const data = await ProcessedEvent.aggregate([
        {
            $group: {
                _id: { clientId: "$clientId", metric: "$metric" },
                totalAmount: { $sum: "$amount" },
                count: { $sum: 1 }
            }
        }
    ]);

    res.json(data);
});

export default router;
