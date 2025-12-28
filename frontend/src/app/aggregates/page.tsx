"use client";

import { useEffect, useState } from "react";
import MotionCard from "@/components/motion-card";
import { fetchAggregates } from "@/lib/api";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AggregatesPage() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchAggregates().then(setData);
  }, []);

  return (
    <MotionCard>
      <h2 className="text-xl font-semibold mb-4">Aggregated Results</h2>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Metric</TableHead>
            <TableHead>Total Amount</TableHead>
            <TableHead>Count</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row._id.clientId}</TableCell>
              <TableCell>{row._id.metric}</TableCell>
              <TableCell>{row.totalAmount}</TableCell>
              <TableCell>{row.count}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </MotionCard>
  );
}
