import apiAxios from "../../../Api/apiConfig";
import type { Auth } from "../Models/Auth";
import type { AuthResponse } from "../Models/AuthResponse";



export async function Login(auth: Auth): Promise<AuthResponse> {
  const response = await apiAxios.post<AuthResponse>(`/auth/login`, auth);
  return response.data;
}
