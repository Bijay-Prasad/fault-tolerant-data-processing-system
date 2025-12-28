import mongoose from "mongoose";

const RawEventSchema = new mongoose.Schema({
    clientId: String,
    rawPayload: Object,
    receivedAt: Date,
    status: String,
    error: String
});

export default mongoose.model("RawEvent", RawEventSchema);