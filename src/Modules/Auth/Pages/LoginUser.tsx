
import { useLogin } from "../Hooks/AuthHooks";
import { useForm } from "@tanstack/react-form";
import { AuthInitialState } from "../Models/Auth";


const LoginUser = () => {
    const loginMutation = useLogin();

    const form = useForm({
       defaultValues : AuthInitialState,
        validators: {
        },
       onSubmit: async ({value}) => {
        try{
            await loginMutation.mutateAsync(value);
            console.log('Inicio de Sesión Exitoso');
            
        }catch (error: any){
            console.log('error')
            
        }
       } 
    }); 

  return (
    <div className="">
        
    </div>

  )
}

export default LoginUser
