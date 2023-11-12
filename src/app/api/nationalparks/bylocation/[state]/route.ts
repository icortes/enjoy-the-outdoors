
export async function POST(request: Request, { params }: { params: { state: string } }) {
  // console.log(params.state);
  
  return Response.json({ message: `Selected:` });
}
