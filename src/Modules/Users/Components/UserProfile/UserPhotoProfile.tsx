import type { UserProfile } from "../../Models/User";

type Props = {
  User?: UserProfile;
  loading?: boolean;
};

const fullName = (u?: UserProfile) =>
  [u?.Name, u?.Surname1, u?.Surname2].filter(Boolean).join(" ") || "—";

const UserPhotoProfile = ({ User, loading }: Props) => {
  return (
    <article className="bg-[#f9fafb] border border-gray-200 shadow-xl rounded-sm p-6 flex flex-col items-center text-center gap-5 md:h-full ">
      
      <h3 className="font-semibold text-[#091540] text-lg">
        {loading ? "Cargando..." : fullName(User)}
      </h3>

      <div className="size-40 md:size-48 rounded-full overflow-hidden border-4 border-[#091540]/25">
        {/* Usa tu campo de foto si existe, si no un fallback local */}
        <img
          src="/Image02.png"
          alt="Foto de perfil"
          className="w-full h-full object-cover"
          draggable={false}
        />
      </div>
    </article>
  );
};

export default UserPhotoProfile;
