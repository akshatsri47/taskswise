import prisma from '../prisma.js';

const testConnection = async () => {
    try {
        await prisma.$connect();
        console.log("connection successful");
    } catch (error) {
        console.log("connection failed", error);
    }
};

export { testConnection, prisma };
