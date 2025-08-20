import apiAxios from "../../../Api/apiConfig";
import type { UserProfile } from "../Models/User";

export async function getUserProfileById(): Promise<UserProfile> {
  const response = await apiAxios.get(`users/me`);
  return response.data;
}
