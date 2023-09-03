import { prismaClient } from "../src/prisma-client.js";

describe("Prisma Client", () => {
  it("should can find many with filter relation", async () => {
    const customer = await prismaClient.customer.findMany({
      where: {
        comments: {
          some: {
            title: {
              contains: "Comment",
            },
          },
        },
      },
      include: {
        comments: true,
      },
    });
    console.info(JSON.stringify(customer));
  });

  // it("should can insert and include many relation", async () => {
  //   const customer = await prismaClient.customer.create({
  //     data: {
  //       id: "alex",
  //       name: "alex",
  //       email: "alex@gmail.com",
  //       phone: "0987",
  //       comments: {
  //         createMany: {
  //           data: [
  //             {
  //               title: "Comment 1",
  //               description: "Desc comment 1",
  //             },
  //             {
  //               title: "Comment 2",
  //               description: "Desc comment 2",
  //             },
  //           ],
  //         },
  //       },
  //     },
  //     include: {
  //       comments: true,
  //     },
  //   });
  //   console.info(customer);
  // });
  // it("should can insert and include one to many", async () => {
  //   const comments = await prismaClient.comment.create({
  //     data: {
  //       customer_id: "eko",
  //       title: "Insert comment eko",
  //       description: "Description comment eko",
  //     },
  //     include: {
  //       customer: true,
  //     },
  //   });
  //   console.info(comments);
  // });
});
