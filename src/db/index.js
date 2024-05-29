import { PrismaClient } from "@prisma/client";

let prisma;

// We check if we have initiliazed the prisma db to not run it again else check the cache if we have it running
// Bolierplate prisma file
if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }

  prisma = global.cachedPrisma;
}

module.exports = { db: prisma };
