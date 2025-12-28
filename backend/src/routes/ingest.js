import express from "express";
import RawEvent from "../models/RawEvent.js";
import ProcessedEvent from "../models/ProcessedEvent.js";
import { normalizeEvent } from "../services/normalizeEvent.js";
import { generateDedupKey } from "../services/dedupKey.js";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        if (req.body.simulateFailure) {
            throw new Error("Simulated DB failure");
        }

        // 1️⃣ Always store raw event first
        const raw = await RawEvent.create({
            clientId: req.body.source,
            rawPayload: req.body,
            receivedAt: new Date(),
            status: "received"
        });

        // 2️⃣ Normalize
        const normalized = normalizeEvent(req.body);
        const dedupKey = generateDedupKey(normalized);

        // 3️⃣ Insert processed event (idempotent)
        await ProcessedEvent.create({
            ...normalized,
            rawEventId: raw._id,
            dedupKey,
            createdAt: new Date()
        });

        // 4️⃣ Mark raw as processed
        await RawEvent.updateOne(
            { _id: raw._id },
            { status: "processed" }
        );

        res.json({ success: true });

    } catch (err) {
        // Duplicate event → safe retry
        if (err.code === 11000) {
            return res.json({ success: true, deduplicated: true });
        }

        res.status(500).json({ error: err.message });
    }
});

export default router;
