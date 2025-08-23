import { useNavigate } from "@tanstack/react-router";
import { getUserProfile, updateUserProfile } from "../Services/UsersServices";
import { useMutation, useQuery } from "@tanstack/react-query";


export const useGetUserProfile = () => {
    const {data: UserProfile, isLoading, error} = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfile()
    });

    return { UserProfile, isLoading, error };
}

export const useUpdateUserProfile = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationFn: updateUserProfile,
    onSuccess: () => {
      console.log("Usuario Actualizado");
      navigate({ to: "/dashboard/users/profile" });
    },
  });
};




