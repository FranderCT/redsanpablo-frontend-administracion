import { getUserProfile } from "../Services/UsersServices";
import { useQuery } from "@tanstack/react-query";


export const useGetUserProfile = () => {
    const {data: UserProfile, isLoading, error} = useQuery({
        queryKey: ['userProfile'],
        queryFn: () => getUserProfile()
    });

    return { UserProfile, isLoading, error };
}

