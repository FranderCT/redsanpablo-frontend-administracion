import type { UserProfile } from "../../Models/User";

type Props = {
  User?: UserProfile;
  loading?: boolean;
};

const formatDate = (iso?: string) => {
  if (!iso) return "—";
  const d = new Date(iso);
  if (isNaN(d.getTime())) return iso; // por si viene ya formateada
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = d.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
};

const field = (label: string, value?: string | number) => (
  <div className="py-2 border-b border-dashed border-gray-300">
    <p className="text-[12px] text-gray-500">{label}</p>
    <span className="text-sm font-medium text-[#091540] break-all">
      {value ?? "—"}
    </span>
  </div>
);

const UserProfileDetails = ({ User, loading }: Props) => {
  const roles = User?.Roles?.map((r: any) => r?.Rolname).filter(Boolean).join(", ");

  return (
    <article className="md:col-span-2 bg-[#f9fafb] border border-gray-200 shadow-xl rounded-sm p-6">
      <h3 className="text-center font-semibold text-[#091540] mb-4">
        {loading ? "Cargando información..." : "Su información"}
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
        {/* Correo / Fecha de Nacimiento */}
        {field("Correo", User?.Email)}
        {field("Fecha de Nacimiento", formatDate(User?.BirthDate))}

        {/* Teléfono / Cédula */}
        {field("Teléfono", User?.PhoneNumber)}
        {field("Cédula", User?.IDcard)}

        {/* NIS / Rol */}
        {field("NIS", User?.Nis)}
        {field("Rol", roles)}

        {/* Dirección (ancho completo) */}
        <div className="sm:col-span-2 py-2">
          <p className="text-[12px] text-gray-500">Dirección</p>
          <span className="text-sm font-medium text-[#091540] break-words">
            {User?.Address ?? "—"}
          </span>
        </div>
      </div>
    </article>
  );
};

export default UserProfileDetails;
