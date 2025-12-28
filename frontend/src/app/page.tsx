import MotionCard from "@/components/motion-card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <MotionCard>
      <h1 className="text-3xl font-bold mb-2">
        Fault-Tolerant Data Processing System
      </h1>
      <p className="text-muted-foreground mb-6">
        Ingest unreliable client events, handle retries safely, and view
        consistent aggregates.
      </p>

      <div className="flex gap-4">
        <Link href="/submit">
          <Button>
            Submit Event <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
        <Link href="/aggregates">
          <Button variant="outline">View Aggregates</Button>
        </Link>
      </div>
    </MotionCard>
  );
}
