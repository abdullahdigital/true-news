export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const country = searchParams.get("country") || "us";
  const category = searchParams.get("category") || "general";
  const page = searchParams.get("page") || 1;
  const pageSize = searchParams.get("pageSize") || 8;

  const params = new URLSearchParams({
    country,
    category,
    apiKey: process.env.NEWS_API_KEY,
    page,
    pageSize,
  });

  const url = `https://newsapi.org/v2/top-headlines?${params.toString()}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in serverless function:", error);
    return new Response(
      JSON.stringify({ status: "error", message: "Internal Server Error" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
