const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8080";

export function getApiBaseUrl(): string {
  return API_BASE_URL.replace(/\/$/, "");
}

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${getApiBaseUrl()}${path}`, {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Falha na API (${response.status})`);
  }

  return response.json() as Promise<T>;
}
