export default defineEventHandler(async () => {
  const prisma = usePrisma();
  return prisma.posts.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
});
