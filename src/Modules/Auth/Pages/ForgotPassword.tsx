
import { useForm } from '@tanstack/react-form';
import { ForgotPasswordInitialState } from '../Models/ForgotPassword';
import { useForgotPasswd } from '../Hooks/AuthHooks';
import { useNavigate } from '@tanstack/react-router';


const ForgotPassword = () => {
    const navigate = useNavigate();

    const goLogin = () => {
        navigate({to: '/auth/login'})
    }

    const useForgotPasswdMutation = useForgotPasswd();
    const form = useForm({
        defaultValues: ForgotPasswordInitialState,
        //validators: {
        //  onChange: RegisterSchema,
        //},
        onSubmit: async ({ value }) => {
            await useForgotPasswdMutation.mutateAsync(value)
            console.log('exito')
        },
    }); 
    
    return (
        <div className="w-full max-w-md bg-white rounded-sm shadow-lg border-t-20 border-[#091540] px-8 py-10">
            {/* Formulario */}
            <div className="flex flex-col justify-center items-center flex-grow w-full gap-4">
                <h2 className="md:text-3xl font-bold text-[#091540] text-center drop-shadow-lg gap-4">Olvidó su contraseña</h2>
    
                <form
                    onSubmit={(e) => {
                    e.preventDefault();
                    form.handleSubmit();
                    }}
                    className="w-full max-w-md p-2 flex flex-col gap-6"
                >
                    <form.Field name="IDcard">
                        {(field) => (
                            <>
                            <input
                                type="text"
                                value={field.state.value}
                                onBlur={field.handleBlur}
                                onChange={(e) => field.handleChange(e.target.value)}
                                placeholder="Cédula"
                                className="w-full px-4 py-2 bg-gray-100 text-[#091540] rounded-md text-sm"
                            />
                            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                <p className="text-sm text-red-500 mt-1">
                                    {(field.state.meta.errors[0] as any)?.message ??
                                    String(field.state.meta.errors[0])}
                                </p>
                            )}
                            </>
                        )}
                    </form.Field>
    
    
                    <form.Field name="Email">
                    {(field) => (
                        <>
                            <input
                                className="w-full px-4 py-2 bg-gray-100 text-[#091540] rounded-md text-sm"
                                placeholder="Correo electrónico"
                                value={field.state.value}
                                type="email"
                                onChange={(e) => field.handleChange(e.target.value)}
                            />
                            {field.state.meta.isTouched && field.state.meta.errors.length > 0 && (
                                <p className="text-sm text-red-500 mt-1">
                                    {(field.state.meta.errors[0] as any)?.message ??
                                    String(field.state.meta.errors[0])}
                                </p>
                            )}
                        </>
                    )}
                    </form.Field>
    
                    <form.Subscribe selector={(state) => [state.canSubmit, state.isSubmitting]}>
                    {([canSubmit, isSubmitting]) => (
                        <div className="flex flex-row justify-end items-end">
                        <button
                            type="submit"
                            className="w-1/3 px-4 py-2 bg-[#091540] shadow-xl text-white  rounded-md font-semibold hover:bg-[#1789FC] transition cursor-pointer"
                            disabled={!canSubmit}
                        >
                            {isSubmitting ? '...' : 'Enviar'}
                        </button>
                        </div>
                    )}
                    </form.Subscribe>
                </form>
                </div>
    
                <p className="mt-6 text-sm md:text-lg text-[#3A7CA5] text-center">
                Regresar a {' '}
                <button onClick={goLogin} className="underline font-medium hover:text-[#091540] cursor-pointer">
                    Iniciar sesión
                </button>
                </p>
        </div>
    
    )
}

export default ForgotPassword 