const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
    const updatedUser = await prisma.user.update({
        where: { id: 1 },
        data: { verified: true }
    });
    console.log(updatedUser);
}

main().finally(() => prisma.$disconnect());
