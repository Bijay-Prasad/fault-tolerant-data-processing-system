import { parseNumber, parseDate } from "../utils/parsers.js";

export function normalizeEvent(raw) {
    return {
        clientId: raw.source ?? "unknown",
        metric: String(raw.payload?.metric ?? "unknown"),
        amount: parseNumber(raw.payload?.amount),
        timestamp: parseDate(raw.payload?.timestamp)
    };
}
