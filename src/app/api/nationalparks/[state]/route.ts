import prisma from "../../../../../prisma/prisma";

export async function GET(request: Request, { state }: { state: string }) {
  try {
    const data = await prisma.national_park_data.findMany({
      where: {},
      
    })
  } catch (error) {}
}
