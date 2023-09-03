import { prismaClient } from "../src/prisma-client.js";

describe("Prisma client", () => {
  it("should can be able to create auto increment primary key", async () => {
    const category = await prismaClient.category.create({
      data: {
        name: "Food",
      },
    });
    console.info(category);
    expect(category).toHaveProperty("id");
  });
});
