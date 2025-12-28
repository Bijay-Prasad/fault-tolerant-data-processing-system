import mongoose from "mongoose";

const ProcessedEventSchema = new mongoose.Schema({
    rawEventId: mongoose.Schema.Types.ObjectId,
    clientId: String,
    metric: String,
    amount: Number,
    timestamp: Date,
    dedupKey: { type: String, unique: true },
    createdAt: Date
});

export default mongoose.model("ProcessedEvent", ProcessedEventSchema);
