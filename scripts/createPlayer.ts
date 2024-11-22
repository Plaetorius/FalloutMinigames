// scripts/createPlayer.ts
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const newPlayer = await prisma.player.create({
    data: {
      name: "Player1",
      hp: 10,
      xp: 0,
      caps: 0,
      photo: "icons/mininuke.png",  // Optional field
    },
  });
  console.log("Created player:", newPlayer);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
