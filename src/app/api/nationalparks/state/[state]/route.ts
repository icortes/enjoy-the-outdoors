import prisma from '../../../../../../prisma/prisma';

export async function GET(request: Request, { params }: { params: { state: string } }) {
  try {
    if (params.state == 'All') {
      const data = await prisma.national_park_data.findMany({});
      return Response.json(data);
    } else {
      let data = await prisma.national_park_data.findMany({
        where: { State: params.state },
      });

      return Response.json(data);
    }
  } catch (error) {
    return Response.json(error);
  }
}
