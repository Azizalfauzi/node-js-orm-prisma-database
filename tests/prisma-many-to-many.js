import { prismaClient } from "../src/prisma-client.js";

describe("Prisma client", () => {
  it("should can find many implicit relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        loves: {
          some: {
            name: {
              contains: "A",
            },
          },
        },
      },
      include: {
        loves: true,
      },
    });
    console.info(JSON.stringify(customer));
  });
  //   it("should can create implicit relation", async () => {
  //     const customer = await prismaClient.customer.update({
  //       where: {
  //         id: "eko",
  //       },
  //       data: {
  //         loves: {
  //           connect: [
  //             {
  //               id: "P0001",
  //             },
  //             {
  //               id: "P0002",
  //             },
  //           ],
  //         },
  //       },
  //       include: {
  //         loves: true,
  //       },
  //     });
  //     console.info(JSON.stringify(customer));
  //   });
  // it("should can be find include many with many relation", async () => {
  //   const customer = await prismaClient.customer.findMany({
  //     where: {
  //       likes: {
  //         some: {
  //           product: {
  //             name: {
  //               contains: "A",
  //             },
  //           },
  //         },
  //       },
  //     },
  //     include: {
  //       likes: {
  //         include: {
  //           product: true,
  //         },
  //       },
  //     },
  //   });
  //   console.info(JSON.stringify(customer));
  // });
  //   it("should can be find include one with many relation", async () => {
  //     const customer = await prismaClient.customer.findUnique({
  //       where: {
  //         id: "eko",
  //       },
  //       include: {
  //         likes: {
  //           include: {
  //             product: true,
  //           },
  //         },
  //       },
  //     });
  //     console.info(JSON.stringify(customer));
  //   });
  //   it("should can be insert include many to many", async () => {
  //     const like = await prismaClient.like.create({
  //       data: {
  //         customer_id: "budi",
  //         product_id: "P0001",
  //       },
  //       include: {
  //         customer: true,
  //         product: true,
  //       },
  //     });
  //     console.info(like);
  //   });
});
