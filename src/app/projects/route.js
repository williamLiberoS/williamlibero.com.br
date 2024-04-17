export async function GET() {
  const res = await fetch("https://my-projects-api.vercel.app/api/projects", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return Response.json({ data });
}
