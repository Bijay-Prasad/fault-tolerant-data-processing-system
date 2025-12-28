import express from "express";
import cors from "cors";
import ingestRoutes from "./routes/ingest.js";
import aggregateRoutes from "./routes/aggregates.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/ingest", ingestRoutes);
app.use("/aggregates", aggregateRoutes);

export default app;
