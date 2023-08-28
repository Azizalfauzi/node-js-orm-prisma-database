import { prismaClient } from "../src/prisma-client.js";

describe("Prisma client", () => {
  it("Be abel execute sql", async () => {
    const id = "1";

    const samples = await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;
    console.info(samples);
    for (const sample of samples) {
      console.info(`Result sample id : ${sample.id} and nama : ${sample.nama}`);
    }
  });
});
