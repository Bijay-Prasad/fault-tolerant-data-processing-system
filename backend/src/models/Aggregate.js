import mongoose from "mongoose";

const AggregateSchema = new mongoose.Schema({
    clientId: String,
    metric: String,
    totalAmount: Number,
    eventCount: Number
});

export default mongoose.model("Aggregate", AggregateSchema);
