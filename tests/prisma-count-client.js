import { prismaClient } from "../src/prisma-client.js";

describe("Prisma client count", () => {
  it("should can count", async () => {
    const total = await prismaClient.customer.count({
      where: {
        name: "Wawan",
      },
    });
    expect(total).toBe(1);
  });
});
