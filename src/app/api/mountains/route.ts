import prisma from '../../../../prisma/prisma';

export async function GET() {
  try {
    const data = await prisma.mountain_data.findMany({
      where: {},
      select: { name: true },
    });
    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
