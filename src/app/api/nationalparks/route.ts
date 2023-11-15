import prisma from '../../../../prisma/prisma';

export async function GET() {
  try {
    const data = await prisma.national_park_data.findMany({
      where: {},
      select: { LocationName: true, State: true },
    });
    return Response.json({ data });
  } catch (error) {
    return Response.json({ error });
  }
}
