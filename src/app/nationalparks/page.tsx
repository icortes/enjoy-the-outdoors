import prisma from '../../../prisma/prisma';

export default async function NationalParks() {
  const park = await prisma.national_park_data.findFirst({});
  console.log(park);
  return <></>;
}
