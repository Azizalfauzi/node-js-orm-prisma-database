import { prismaClient } from "../src/prisma-client.js";

// describe("Transaction prisma client", () => {
//   it("should can execute create and select field", async () => {
//     const customer = await prismaClient.customer.create({
//       data: {
//         id: "Ahm",
//         name: "Ahmad",
//         email: "ah@gmail.com",
//         phone: "09889",
//       },
//       select: {
//         id: true,
//         name: true,
//       },
//     });
//     console.info(customer);
//     expect(customer.id).toBe("Ahm");
//     expect(customer.name).toBe("Ahmad");
//     expect(customer.email).toBeUndefined();
//     expect(customer.phone).toBeUndefined();
//   });
// });

describe("Transaction prisma client", () => {
  it("should can execute find many select field", async () => {
    const customer = await prismaClient.customer.findMany({
      select: {
        id: true,
        name: true,
      },
    });
    for (const cust of customer) {
      console.info(cust);
      expect(cust.id).toBeDefined();
      expect(cust.name).toBeDefined();
      expect(cust.email).toBeUndefined();
      expect(cust.phone).toBeUndefined();
    }
  });
});
