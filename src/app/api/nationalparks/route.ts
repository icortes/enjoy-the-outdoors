import prisma from '../../../../prisma/prisma';

export async function GET() {
  const data = await prisma.national_park_data.findMany({});
  return Response.json({ data });
}
