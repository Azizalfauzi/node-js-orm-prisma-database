import { prismaClient } from "../src/prisma-client.js";

// describe("Transaction prisma client", () => {
//   it("should can execute sequential transaction", async () => {
//     const [wan, win] = await prismaClient.$transaction([
//       prismaClient.customer.create({
//         data: {
//           id: "wan",
//           email: "wanwan@gmail.com",
//           name: "Wawan",
//           phone: "082334",
//         },
//       }),
//       prismaClient.customer.create({
//         data: {
//           id: "win",
//           email: "windah@gmail.com",
//           name: "windah",
//           phone: "08992",
//         },
//       }),
//     ]);
//     expect(wan.name).toBe("Wawan");
//     expect(win.name).toBe("windah");
//   });
// });

describe("Transaction interaction prisma client", () => {
  it("should can execute sequential transaction", async () => {
    const [wan, win] = await prismaClient.$transaction(async (prisma) => {
      const wan = await prisma.customer.create({
        data: {
          id: "wan1",
          email: "wanwan1@gmail.com",
          name: "Wawan1",
          phone: "0823341",
        },
      });
      const win = await prisma.customer.create({
        data: {
          id: "win1",
          email: "windah1@gmail.com",
          name: "windah1",
          phone: "089921",
        },
      });
      return [wan, win];
    });
    expect(wan.name).toBe("Wawan1");
    expect(win.name).toBe("windah1");
  });
});
