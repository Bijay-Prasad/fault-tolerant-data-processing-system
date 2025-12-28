export function parseNumber(val) {
    const n = Number(val);
    return isNaN(n) ? 0 : n;
}

export function parseDate(val) {
    const d = new Date(val);
    return isNaN(d.getTime()) ? new Date(0) : d;
}
