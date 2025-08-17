import { useLogin } from "../Hooks/AuthHooks";
import { useForm } from "@tanstack/react-form";
import { AuthInitialState } from "../Models/Auth";
import { AuthSchema } from "../Schemas/AuthSchemas";


const LoginUser = () => {
  const loginMutation = useLogin();

  const form = useForm({
    defaultValues: AuthInitialState,
    validators: { onChange: AuthSchema },
    onSubmit: async ({ value }) => {
      try {
        await loginMutation.mutateAsync(value);
        console.log("Inicio de Sesión Exitoso");
      } catch {
        console.log("error");
      }
    },
  });

  return (
    <div
      className="
        w-[97%] sm:w-[80%] md:w-[60%] lg:w-[40%]
        h-[50%] md:h-[40%]
        max-w-md sm:min-w-[320px]
        bg-white border border-gray-200 p-6 sm:p-8
        flex flex-col items-center justify-center
      "
    >
      {/* Título */}
      <h1 className="text-2xl sm:text-3xl font-extrabold text-[#091540] text-center mb-6 sm:mb-8 ">
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
          <form.Field name="email">
            {(field) => (
              <>
                <input
                  type="email"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Correo electrónico"
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

          <form.Field name="password">
            {(field) => (
              <>
                <input
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Contraseña"
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
              <a
                href="/auth/forgotPassword"
                className="underline text-[#091540] font-medium hover:text-[#1789FC] text-sm text-center sm:text-left"
              >
                ¿Olvidó su contraseña?
              </a>

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
