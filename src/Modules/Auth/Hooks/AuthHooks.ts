import { useMutation } from "@tanstack/react-query";
import { Login } from "../Services/LoginService";
import { useNavigate } from "@tanstack/react-router";

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: Login,
        onSuccess: (res) =>{
            localStorage.setItem('token', res.token);
        }
    })
    return mutation;
}

export function useLogout() {
  const navigate = useNavigate();

  return () => {
    if (localStorage.getItem("token")) {
      localStorage.removeItem("token");
      navigate({ to: "/auth/login" }); 
    }
  };
}