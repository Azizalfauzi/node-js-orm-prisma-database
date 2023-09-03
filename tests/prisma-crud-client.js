import { prismaClient } from "../src/prisma-client.js";

describe("Prisma client", () => {
  it("should  be able create customer", async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: "wan1",
        name: "Wawan1",
        email: "wawan1@gmail.com",
        phone: "082332",
      },
    });
    expect(customer.id).toBe("1");
    expect(customer.name).toBe("Aziz Alfa");
    expect(customer.email).toBe("zuha@gmail.com");
    expect(customer.phone).toBe("082334");
  });
});

// describe("Prisma client", () => {
//   it("should  be able update customer", async () => {
//     const customer = await prismaClient.customer.update({
//       data: {
//         name: "Zuha",
//       },
//       where: {
//         id: "1",
//       },
//     });
//     expect(customer.id).toBe("1");
//     expect(customer.name).toBe("Zuha");
//     expect(customer.email).toBe("zuha@gmail.com");
//     expect(customer.phone).toBe("082334");
//   });
// });

// describe("Prisma client", () => {
//   it("should  be able read customer", async () => {
//     const customer = await prismaClient.customer.findUnique({
//       where: {
//         id: "1",
//       },
//     });
//     expect(customer.id).toBe("1");
//     expect(customer.name).toBe("Zuha");
//     expect(customer.email).toBe("zuha@gmail.com");
//     expect(customer.phone).toBe("082334");
//   });
// });


// describe("Prisma client", () => {
//   it("should  be able delete customer", async () => {
//     const customer = await prismaClient.customer.delete({
//       where: {
//         id: "1",
//       },
//     });
//     expect(customer.id).toBe("1");
//     expect(customer.name).toBe("Zuha");
//     expect(customer.email).toBe("zuha@gmail.com");
//     expect(customer.phone).toBe("082334");
//   });
// });
