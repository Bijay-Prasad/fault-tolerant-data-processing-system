# fault-tolerant-data-processing-system

## Assumptions
- Clients may resend events indefinitely
- Raw data should never be lost
- Eventual consistency is acceptable

## Preventing Double Counting
- Deterministic deduplication key
- MongoDB unique index
- Transactional ingestion

## DB Failure Mid-Request
- MongoDB transaction aborts
- No partial writes
- Retry is safe

## What Breaks First at Scale
- Aggregation performance
- MongoDB single-node throughput
- Hash collisions (extremely unlikely)
