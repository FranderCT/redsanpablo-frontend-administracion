import apiAxios from "../../../Api/apiConfig";
import type { UserProfile } from "../Models/User";

export async function getUserProfileById(Id: number): Promise<UserProfile> {
  try {
    const { data } = await apiAxios.get<UserProfile>(`users/${Id}`);
    return data;
  } catch (error: any) {
    console.error("Error al obtener perfil:", error);
    throw error;
  }
}
