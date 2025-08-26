import apiAxios from "../../../Api/apiConfig";
import type { EditUser } from "../Models/EditUser";
import type { UserProfile } from "../Models/User";
import type { Users } from "../Models/Users";

export async function getUserProfile(): Promise<UserProfile> {
  const response = await apiAxios.get(`users/me`);
  return response.data;
}

export async function updateUserProfile(User: EditUser) : Promise<EditUser>{
  const res = await apiAxios.put(`users/me`, User)
  return res.data;
}

export async function getAllUsers(): Promise<Users[]> {
  const res = await apiAxios.get<Users[]>("/users");
  return res.data;
}
