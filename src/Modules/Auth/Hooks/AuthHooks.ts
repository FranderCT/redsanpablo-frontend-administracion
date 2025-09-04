import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createUser, ForgotPasswd, Login, ResetPasswd } from "../Services/AuthServices";
import { useNavigate } from "@tanstack/react-router";
import type { ResetPassword } from "../Models/ResetPassword";

export const useLogin = () => {
    const mutation = useMutation({
        mutationFn: Login,
        onSuccess: (res) =>{
            localStorage.setItem('token', res.token);
        }
    })
    return mutation;
}

export const useCreateUser = () => {
    const queryClient = useQueryClient()

    const mutation = useMutation({
        mutationFn: createUser,
        onSuccess: () => { 
            queryClient.invalidateQueries({ queryKey: ['users'] });
        },
    });

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


type ResetArgs = { payload: ResetPassword; token: string };

export const useResetPassword = () => {

  return useMutation({
    mutationFn: ({ payload, token }: ResetArgs) => ResetPasswd(payload, token),
    onSuccess: () => {
      console.log("Contraseña cambiada");
    },
  });
};

export const useForgotPasswd = () => {
    const mutation = useMutation({
        mutationFn: ForgotPasswd,
        onSuccess: () =>{
            console.log('Correo enviado')
        },
        onError: () =>{
          console.log('error aqui')
        }
    })
    return mutation;
}
