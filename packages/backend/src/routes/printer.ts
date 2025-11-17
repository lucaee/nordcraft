import { fetch } from "bun";

export default async function handler(req: Request) {
  const url = "http://printer1.local/"; // ODER deine Windows-IP

  try {
    const response = await fetch(url, {
      method: "GET",
    });

    const text = await response.text();

    return new Response(text, {
      status: 200,
      headers: {
        "Content-Type": "text/html",
        "Access-Control-Allow-Origin": "*",
      },
    });

  } catch (err) {
    console.error(err);
    return new Response("Proxy error", { status: 500 });
  }
}
