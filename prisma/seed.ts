import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.posts.deleteMany();

  const posts = await Promise.all(
    Array.from({ length: 10 }).map(async (item, i) => {
      return await prisma.posts.create({
        data: {
          title: `Post ${i + 1}`,
          content: `Content for post ${i + 1}`,
          createdAt: new Date(Date.now() + i * 24 * 60 * 60 * 1000),
        },
      });
    })
  );

  console.log(posts);
}

await main();
