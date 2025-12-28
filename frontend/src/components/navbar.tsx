import Link from "next/link";
import { Database } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-background">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-semibold">
          <Database className="h-5 w-5" />
          Carbon Crunch
        </div>
        <div className="flex gap-6 text-sm">
          <Link href="/">Home</Link>
          <Link href="/submit">Submit</Link>
          <Link href="/aggregates">Aggregates</Link>
        </div>
      </div>
    </nav>
  );
}
