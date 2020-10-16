import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getPosts(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // await prisma.post.create({
  //   data: {
  //     title: "My Post Title Second",
  //     body: "This is my amazing post again",
  //   },
  // });
  const posts = await prisma.post.findMany();
  res.status(200).json(posts);
}
