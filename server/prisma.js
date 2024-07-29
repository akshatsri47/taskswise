import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// export const createUser = async (req, res) => {
//     const { username, email, password } = req.body;
//     try {
//       const user = await prisma.user.create({
//         data: {
//           username,
//           email,
//           password,
//         },
//       });
//       res.status(201).json(user);
//     } catch (error) {
//       res.status(400).json({ error: error.message });
//     }
//   };
export default prisma;
