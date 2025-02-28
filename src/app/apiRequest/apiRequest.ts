import { httpClient } from "@/lib/http";

export class ApiRequest {
  private static instance: ApiRequest;
  private baseUrl: string;
  private token: string | null = null;

  private constructor() {
    this.baseUrl =
      process.env.NEXT_PUBLIC_API_URL || "http://localhost:8386/v1/api";
  }

  static getInstance(): ApiRequest {
    if (!ApiRequest.instance) {
      ApiRequest.instance = new ApiRequest();
    }
    return ApiRequest.instance;
  }

  setToken(token: string) {
    this.token = token;
  }

  clearToken() {
    this.token = null;
  }

  // 🛡️ AUTH API
  async login(email: string, password: string) {
    const result = await httpClient(`${this.baseUrl}/auth/login`, "POST", {
      email,
      password,
    });

    // Gọi API để lưu token vào cookie trên server Next.js
    const response = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ result }),
    });

    if (!response.ok) {
      throw new Error("Failed to set token in cookie.");
    }

    const data = await response.json();
    this.setToken(data.token); // Lưu vào instance

    return data;
  }

  async register(email: string, password: string, name: string) {
    return httpClient(`${this.baseUrl}/auth/register`, "POST", {
      email,
      password,
      name,
    });
  }

  async logout() {
    return httpClient(`${this.baseUrl}/auth/logout`, "POST", null, {
      token: this.token!,
    });
  }

  // 👤 USER API
  //   async getUser() {
  //     return httpClient(`${this.baseUrl}/user`, "GET", null, {
  //       token: this.token!,
  //     });
  //   }

  //   async updateUser(
  //     userId: string,
  //     data: Partial<{ name: string; email: string }>
  //   ) {
  //     return httpClient(`${this.baseUrl}/user/${userId}`, "PUT", data, {
  //       token: this.token!,
  //     });
  //   }

  //   async deleteUser(userId: string) {
  //     return httpClient(`${this.baseUrl}/user/${userId}`, "DELETE", null, {
  //       token: this.token!,
  //     });
  //   }

  //   // 🛒 CRUD PRODUCT API
  //   async createProduct(data: { name: string; price: number; stock: number }) {
  //     return httpClient(`${this.baseUrl}/products`, "POST", data, {
  //       token: this.token!,
  //     });
  //   }

  //   async getProducts() {
  //     return httpClient(`${this.baseUrl}/products`, "GET", null, {
  //       token: this.token!,
  //     });
  //   }

  //   async updateProduct(
  //     productId: string,
  //     data: Partial<{ name: string; price: number; stock: number }>
  //   ) {
  //     return httpClient(`${this.baseUrl}/products/${productId}`, "PUT", data, {
  //       token: this.token!,
  //     });
  //   }

  //   async deleteProduct(productId: string) {
  //     return httpClient(`${this.baseUrl}/products/${productId}`, "DELETE", null, {
  //       token: this.token!,
  //     });
  //   }
}

export default ApiRequest.getInstance();
