import crypto from "crypto";

export function generateDedupKey(e) {
    return crypto
        .createHash("sha256")
        .update(`${e.clientId}-${e.metric}-${e.amount}-${e.timestamp.toISOString()}`)
        .digest("hex");
}
