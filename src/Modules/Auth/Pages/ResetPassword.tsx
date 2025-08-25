import { useForm } from "@tanstack/react-form";
import { useNavigate } from "@tanstack/react-router";
import { ResetPasswordInitialState } from "../Models/ResetPassword";
import { useResetPassword } from "../Hooks/AuthHooks";
import { useState } from "react";
import g29 from '../assets/g29.png';

const ResetPassword = () => {
  const navigate = useNavigate();
  const resetPasswdMutation = useResetPassword();
  const [isSuccess, setIsSuccess] = useState(false);

  // Leer ?token=... desde la URL
  const token = new URLSearchParams(window.location.search).get("token") ?? "";
  console.log("URL token?", token); // TEMP

  const form = useForm({
    defaultValues: ResetPasswordInitialState,
    onSubmit: async ({ value }) => {
      if (value.NewPassword !== value.ConfirmPassword) {
        alert("Las contraseñas no coinciden");
        return;
      }
      if (!token) {
        alert("Token no encontrado en la URL");
        return;
      }

      await resetPasswdMutation.mutateAsync({
        payload: value,
        token,
      });

      form.reset();
      setIsSuccess(true);
      // La navegación ocurre en onSuccess del hook si así lo definiste.
    },
  });

  const goLogin = () => navigate({ to: "/auth/login" });

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
        className="absolute inset-0 h-100 opacity-4 mx-auto my-auto pointer-events-none select-none "
      />

      {/* Título */}
      <h1 className="text-3xl sm:text-3xl font-extrabold text-[#091540] text-center mb-6 sm:mb-8">
        Restablecer contraseña
      </h1>

      {/* Formulario */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="w-full flex flex-col mt-6"
      >
        <div className="w-full flex flex-col gap-3">
          {/* Nueva contraseña */}
          <form.Field name="NewPassword">
            {(field) => (
              <>
                <input
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Nueva contraseña"
                  autoComplete="new-password"
                  className="
                    w-full px-4 py-3 border border-gray-300
                    text-[#091540] text-sm outline-none
                    focus:ring-2 focus:ring-[#1789FC]/60
                  "
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

          {/* Confirmar contraseña */}
          <form.Field name="ConfirmPassword">
            {(field) => (
              <>
                <input
                  type="password"
                  value={field.state.value}
                  onBlur={field.handleBlur}
                  onChange={(e) => field.handleChange(e.target.value)}
                  placeholder="Confirmar contraseña"
                  autoComplete="new-password"
                  className="
                    w-full px-4 py-3 border border-gray-300
                    text-[#091540] text-sm outline-none
                    focus:ring-2 focus:ring-[#1789FC]/60
                  "
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
                type="button"
                onClick={goLogin}
                className="underline text-[#091540] font-medium hover:text-[#1789FC] text-sm text-center sm:text-left"
              >
                Iniciar sesión
              </button>

              <button
                type="submit"
                disabled={!canSubmit || isSubmitting || !token}
                className={`
                  w-full sm:w-auto
                  px-5 py-2.5 text-white font-semibold shadow-md transition
                  ${(!canSubmit || !token)
                    ? 'bg-[#091540]/60 cursor-not-allowed'
                    : 'bg-[#091540] hover:bg-[#1789FC]'}
                `}
              >
                {isSubmitting ? "..." : "Restablecer"}
              </button>
            </div>
          )}
        </form.Subscribe>

        {/* Mensaje de éxito */}
        {isSuccess && (
          <div className="mt-6 text-center">
            <p className="font-extrabold text-[#091540]">
              ¡Se ha restablecido la contraseña correctamente!
            </p>
            <button
              type="button"
              onClick={goLogin}
              className="underline font-semibold text-[#1789FC] hover:text-[#091540]"
            >
              Ir a iniciar sesión
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default ResetPassword;
