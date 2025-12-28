"use client";

import { useState } from "react";
import MotionCard from "@/components/motion-card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { ingestEvent } from "@/lib/api";

export default function SubmitPage() {
  const [json, setJson] = useState("");
  const [simulateFailure, setSimulateFailure] = useState(false);
  const [result, setResult] = useState<any>(null);

  async function handleSubmit() {
    try {
      const payload = JSON.parse(json);
      payload.simulateFailure = simulateFailure;
      const res = await ingestEvent(payload);
      setResult(res);
    } catch {
      alert("Invalid JSON");
    }
  }

  return (
    <MotionCard>
      <h2 className="text-xl font-semibold mb-4">Submit Raw Event</h2>

      <Textarea
        rows={8}
        placeholder="Paste raw JSON here"
        value={json}
        onChange={(e) => setJson(e.target.value)}
      />

      <div className="flex items-center gap-3 my-4">
        <Switch
          checked={simulateFailure}
          onCheckedChange={setSimulateFailure}
        />
        <span className="text-sm">Simulate DB Failure</span>
      </div>

      <Button onClick={handleSubmit}>Submit Event</Button>

      {result && (
        <pre className="mt-4 text-sm bg-muted p-4 rounded">
          {JSON.stringify(result, null, 2)}
        </pre>
      )}
    </MotionCard>
  );
}
