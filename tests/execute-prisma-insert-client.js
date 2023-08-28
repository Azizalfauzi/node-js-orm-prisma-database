import { prismaClient } from "../src/prisma-client.js";
describe("Prisma client", () => {
  it("Be abel execute sql", async () => {
    const id = 2;
    const name = "Aziz Alfa";
    const impacted =
      await prismaClient.$executeRaw`INSERT INTO sample(id,nama) VALUES (${id},${name});`;
    expect(impacted).toBe(2);
  });
});
