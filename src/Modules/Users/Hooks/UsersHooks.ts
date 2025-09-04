import { useNavigate } from "@tanstack/react-router";
import { deleteUser, getAllUsers, getUserProfile, updateUserProfile, updateUsers } from "../Services/UsersServices";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type { EditUser } from "../Models/EditUser";


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

export const useUpdateUser = () => {
  return useMutation({
    mutationFn: ({ id, payload }: { id: number; payload: EditUser }) =>
      updateUsers(id, payload),
    onSuccess: () => {
      console.log('usuario actualizado');
    },
  });
};


export const useGetAllUsers = () => {
  const { data: usersProfiles, isPending, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return { usersProfiles, isPending, error };
};

export function useDeleteUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: deleteUser,
     onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['users'] })
    },
  })
}