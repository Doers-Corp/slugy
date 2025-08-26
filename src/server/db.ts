import { PrismaClient } from "@prisma/client";
import { PrismaNeon } from "@prisma/adapter-neon";
import { neonConfig } from "@neondatabase/serverless";
import ws from "ws";
import { readReplicas } from "@prisma/extension-read-replicas";

// Neon WebSocket config for Node.js (once)
neonConfig.webSocketConstructor = ws;
neonConfig.poolQueryViaFetch = true;

declare global {
  var prisma: PrismaClient | undefined;
}

function createPrismaClient(): PrismaClient {
  // Vercel Postgres URL이 있으면 우선 사용, 없으면 일반 DATABASE_URL 사용
  const connectionString = 
    process.env.POSTGRES_PRISMA_URL || 
    process.env.DATABASE_URL!;
    
  const adapter = new PrismaNeon({
    connectionString,
  });

  let client = new PrismaClient({ adapter, log: ["error"] });

  const replicaUrl = process.env.DATABASE_REPLICA_URL;
  if (replicaUrl) {
    client = client.$extends(
      readReplicas({ url: replicaUrl }),
    ) as unknown as PrismaClient;
  }

  return client;
}

export const db: PrismaClient = globalThis.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}

export async function safeQuery<T>(
  queryFn: () => Promise<T>,
): Promise<T | null> {
  try {
    return await queryFn();
  } catch (error) {
    console.error("Database query error:", error);
    return null;
  }
}
