import { prismaClient } from "../src/prisma-client.js";

describe("Prisma client", () => {
  it("should can do paging", async () => {
    const customer = await prismaClient.customer.findMany({
      skip: 0,
      take: 10,
      orderBy: [
        {
          name: "desc",
        },
        {
          email: "asc",
        },
      ],
    });
    console.info(customer);
  });
});
