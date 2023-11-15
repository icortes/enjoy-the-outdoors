import prisma from '../../../../../prisma/prisma';

export async function GET(
  request: Request,
  { params: { name } }: { params: { name: string } }
) {
  try {
    const data = await prisma.mountain_data.findFirst({ where: { name: name } });
    console.log(data);
    return Response.json(data);
  } catch (error) {
    return Response.json(error);
  }
}
