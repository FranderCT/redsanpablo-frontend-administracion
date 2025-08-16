import { useMutation } from "@tanstack/react-query";
import { Login } from "../Services/LoginService";


export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: Login,
        onSuccess: (res) =>{
            localStorage.setItem('token', res.token);
            console.log("Login successful, token stored:", res.token);
        }
    })
    return mutation;
}

