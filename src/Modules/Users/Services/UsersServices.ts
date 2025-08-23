import apiAxios from "../../../Api/apiConfig";
import type { EditUser } from "../Models/EditUser";
import type { UserProfile } from "../Models/User";

export async function getUserProfile(): Promise<UserProfile> {
  const response = await apiAxios.get(`users/me`);
  return response.data;
}

export async function updateUserProfile() : Promise<EditUser>{
  const res = await apiAxios.put(`users/me`)
  return res.data;
}