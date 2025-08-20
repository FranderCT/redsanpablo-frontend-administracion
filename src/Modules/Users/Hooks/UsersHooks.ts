import { getUserProfileById } from "../Services/UsersServices";
import { useQuery } from "@tanstack/react-query";


export const useGetUserProfileById = () => {
    const {data: UserProfile, isLoading, error} = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfileById()
    });

    return { UserProfile, isLoading, error };
}

