const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function ingestEvent(payload: any) {
  const res = await fetch(`${BASE_URL}/ingest`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  return res.json();
}

export async function fetchAggregates() {
  const res = await fetch(`${BASE_URL}/aggregates`);
  return res.json();
}
