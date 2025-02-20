import envConfig from "@/app/config/config";

export async function apiRequest<T>(
  endpoint: string,
  method: "GET" | "POST" | "PUT" | "DELETE" = "GET",
  data?: object
): Promise<T> {
  try {
    const response = await fetch(
      `${envConfig?.NEXT_PUBLIC_API_ENDPOINT}${endpoint}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: data ? JSON.stringify(data) : undefined,
      }
    );

    const result: T = await response.json();
    console.log(result);
    if (!response.ok) {
      throw new Error(result as any);
    }

    return result;
  } catch (error: any) {
    console.error("API Request Error:", error.message);
    throw new Error(error.message || "Something went wrong");
  }
}
