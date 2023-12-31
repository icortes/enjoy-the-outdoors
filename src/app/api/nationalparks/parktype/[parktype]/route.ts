import prisma from '../../../../../../prisma/prisma';

export async function GET(
  request: Request,
  { params }: { params: { parktype: string } }
) {
  try {
    if (params.parktype == 'All') {
      const data = await prisma.national_park_data.findMany({});
      return Response.json(data);
    } else {
      let data = await prisma.national_park_data.findMany({
        where: {
          LocationName: {
            contains: params.parktype,
            mode: 'insensitive',
          },
        },
      });

      return Response.json(data);
    }
  } catch (error) {
    return Response.json(error);
  }
}
