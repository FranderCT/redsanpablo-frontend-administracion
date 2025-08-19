import { getUserProfileById } from "../Services/UsersServices";
import { useQuery } from "@tanstack/react-query";


export const useGetUserProfileById = (Id : number) => {
    const {data: UserProfile, isLoading, error} = useQuery({
        queryKey: ['userProfile', Id],
        queryFn: () => getUserProfileById(Id )
    });

    return { UserProfile, isLoading, error };
}

