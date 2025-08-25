// utils/auth.ts
import {jwtDecode} from "jwt-decode";

export function getUserIdFromToken(): number | null {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const payload = jwtDecode<{ id: number }>(token);
    return payload?.id ?? null;
  } catch {
    return null;
  }
}
