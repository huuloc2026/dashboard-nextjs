export interface FetchOptions extends RequestInit {
  headers?: Record<string, string>;
  token?: string;
  timeout?: number; // Hỗ trợ timeout request
}

export class HttpError extends Error {
  status: number;
  payload: any;

  constructor(status: number, payload: any) {
    super(payload?.message || "HTTP Error");
    this.status = status;
    this.payload = payload;
  }
}

export async function httpClient<T = any>(
  url: string,
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" = "GET",
  body?: any,
  options: FetchOptions = {}
): Promise<T> {
  const { token, headers, timeout = 10000, ...restOptions } = options; // Default timeout 10s

  const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    ...headers,
  };

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    const response = await fetch(url, {
      method,
      headers: defaultHeaders,
      body: body ? JSON.stringify(body) : undefined,
      signal: controller.signal,
      ...restOptions,
    });

    clearTimeout(timeoutId);

    let responseData;
    try {
      responseData = await response.json();
    } catch (error) {
      responseData = null;
    }

    if (!response.ok) {
      throw new HttpError(
        response.status,
        responseData || { message: `HTTP Error: ${response.status}` }
      );
    }

    return responseData as T;
  } catch (error: any) {
    if (error.name === "AbortError") {
      throw new Error("Request timed out");
    }
    console.error("API Error:", error.message);
    throw error;
  }
}
