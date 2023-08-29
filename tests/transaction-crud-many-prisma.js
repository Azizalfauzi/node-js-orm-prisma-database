import { prismaClient } from "../src/prisma-client";

// describe("Prisma client transaction crud", () => {
//   it("should can create many record ", async () => {
//     const { count } = await prismaClient.customer.createMany({
//       data: [
//         {
//           id: "eko",
//           email: "eko@gmail.com",
//           name: "eko",
//           phone: "0823342",
//         },
//         {
//           id: "budi",
//           email: "budi@gmail.com",
//           name: "budi",
//           phone: "082123",
//         },
//       ],
//     });
//     expect(count).toBe(2);
//   });
// });

// describe("Prisma client transaction crud", () => {
//   it("should can update many record ", async () => {
//     // await prismaClient.customer.update({
//     //   data: {
//     //     email: "ekoaja@gmail.com",
//     //   },
//     //   where:{
//     //     id:"eko"
//     //   }
//     // });
//     const { count } = await prismaClient.customer.updateMany({
//       data: {
//         email: "budilagi@gmail.com",
//       },
//       where: {
//         name: "budi",
//       },
//     });
//     expect(count).toBe(1);
//   });
// });

// describe("Prisma client transaction crud", () => {
//   it("should can delete many record ", async () => {
//     // await prismaClient.customer.delete({
//     //   data: {
//     //     email: "ekoaja@gmail.com",
//     //   },
//     //   where:{
//     //     id:"eko"
//     //   }
//     // });
//     const { count } = await prismaClient.customer.deleteMany({
//       where: {
//         name: "Mbu",
//       },
//     });
//     expect(count).toBe(0);
//   });
// });

describe("Prisma client transaction crud", () => {
  it("should can read many record ", async () => {
    // await prismaClient.customer.delete({
    //   data: {
    //     email: "ekoaja@gmail.com",
    //   },
    //   where:{
    //     id:"eko"
    //   }
    // });
    const customer = await prismaClient.customer.findMany({});
    console.info(customer)
    expect(customer.length).toBe(6);
  });
});
