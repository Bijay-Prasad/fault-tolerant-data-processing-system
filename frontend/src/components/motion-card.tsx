"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";

export default function MotionCard({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="p-6">{children}</Card>
    </motion.div>
  );
}
