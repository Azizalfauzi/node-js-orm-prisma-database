import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can find one to one relation filter", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        wallet: {
          isNot: null,
        },
      },
      include: {
        wallet: true,
      },
    });
    console.info(customer);
  });
  // it("should can find one to one relation", async () => {
  //   const customer = await prismaClient.customer.findUnique({
  //     where: {
  //       id: "ad",
  //     },
  //     include: {
  //       wallet: true,
  //     },
  //   });
  //   console.info(customer);
  // });
  // it("should can create one to one relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "ad",
  //       name: "adi wijaya",
  //       email: "adi@gmail.com",
  //       phone: "0902",
  //       wallet: {
  //         create: {
  //           id: "ad",
  //           balance: 25000,
  //         },
  //       },
  //     },
  //     include: {
  //       wallet: true,
  //     },
  //   });
  //   console.info(customer);
  // });
  // it("should can create one to one, relation", async () => {
  //   const wallet = await prismaClient.wallet.create({
  //     data: {
  //       id: "eko",
  //       customer_id: "eko",
  //       balance: 200000,
  //     },
  //     include: {
  //       customer: true,
  //     },
  //   });
  //   console.info(wallet);

  // });
});
