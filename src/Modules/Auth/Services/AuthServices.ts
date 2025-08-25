import apiAxios from "../../../Api/apiConfig";
import type { Auth } from "../Models/Auth";
import type { AuthResponse } from "../Models/AuthResponse";
import type { changePassword } from "../Models/changePassword";
import type { ForgotPassword, ForgotPasswordResponse } from "../Models/ForgotPassword";
import type { ResetPassword } from "../Models/ResetPassword";



export async function Login(auth: Auth): Promise<AuthResponse> {
  const response = await apiAxios.post<AuthResponse>(`/auth/login`, auth);
  return response.data;
}

export async function ResetPasswd(payload: ResetPassword, token: string): Promise<void> {
  await apiAxios.put(`/auth/reset-password`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function ChangePasswd (payload: changePassword, token: string): Promise<void>{
  await apiAxios.put(`/auth/reset-password`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function ForgotPasswd(payload : ForgotPassword) : Promise<ForgotPasswordResponse>{
  const res = await apiAxios.post<ForgotPasswordResponse>(`/auth/forgot-password`, payload);
  return res.data;
}