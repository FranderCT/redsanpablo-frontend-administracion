import { useLogin } from "../Hooks/AuthHooks";
import { useForm } from "@tanstack/react-form";
import { AuthInitialState } from "../Models/Auth";
import { AuthSchema } from "../Schemas/AuthSchemas";
import { useNavigate } from "@tanstack/react-router";
import g29 from '../assets/g29.png';


const LoginUser = () => {
  const loginMutation = useLogin();
  const navigate = useNavigate();

  const goFotgotPsswrd = () => {
    navigate({to : '/auth/forgot-password'})
  }
  
  const form = useForm({
    defaultValues: AuthInitialState,
    validators: { onChange: AuthSchema },
    onSubmit: async ({ value }) => {
      try {
        await loginMutation.mutateAsync(value);
        console.log("Inicio de Sesión Exitoso");
         navigate({ to: "/dashboard" });
      } catch {
        console.log("error");
      }
    },
  });

  return (
    <div
      className="
        relative
        w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%]
        h-[60%] md:h-[40%]
        max-w-md sm:min-w-[320px]
        bg-white border border-gray-200 p-6 sm:p-8
        flex flex-col items-center justify-center
        shadow-xl
      "
    >
      {/* Marca de agua */}
      <img
        src={g29}
        alt="Logo ASADA"
        className="absolute inset-0 h-90 opacity-4 mx-auto my-auto pointer-events-none select-none "
      />
      {/* Título */}
      <h1 className="text-5xl sm:text-3xl font-extrabold text-[#091540] text-center mb-6 sm:mb-8 ">
        Iniciar sesión
      </h1>

      {/* Formulario */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit(e);
        }}
        className="w-full flex flex-col mt-6 "
      >
        {/* Campos */}
        <div className="w-full flex flex-col gap-3">
          <form.Field name="Email">
            {(field) => (
              <>
                <input
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingrese su Correo electrónico"
                  autoComplete="email"
                  className="w-full px-4 py-3 border border-gray-300  text-[#091540] text-sm outline-none focus:ring-2 focus:ring-[#1789FC]/60"
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

          <form.Field name="Password">
            {(field) => (
              <>
                <input
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Ingrese su Contraseña"
                  autoComplete="current-password"
                  className="w-full px-4 py-3 border border-gray-300 text-[#091540] text-sm outline-none focus:ring-2 focus:ring-[#1789FC]/60"
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
        </div>

        {/* Acciones */}
        <form.Subscribe selector={(s) => [s.canSubmit, s.isSubmitting]}>
          {([canSubmit, isSubmitting]) => (
            <div
              className="
                mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-6
              "
            >
              <button
                className="underline text-[#091540] font-medium hover:text-[#1789FC] text-sm text-center sm:text-left"
                onClick={goFotgotPsswrd}
              >
                ¿Olvidó su contraseña?
              </button>

              <button
                type="submit"
                disabled={!canSubmit}
                className={`
                  w-full sm:w-auto
                  px-5 py-2.5  text-white font-semibold shadow-md transition
                  ${canSubmit ? "bg-[#091540] hover:bg-[#1789FC]" : "bg-[#091540]/60 cursor-not-allowed"}
                `}
              >
                {isSubmitting ? "..." : "Continuar"}
              </button>
            </div>
          )}
        </form.Subscribe>
      </form>
    </div>
  );
};

export default LoginUser;
