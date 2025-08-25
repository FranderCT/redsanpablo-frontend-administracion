import HeaderUserProfile from "../Components/UserProfile/HeaderUserProfile";
import UserPhotoProfile from "../Components/UserProfile/UserPhotoProfile";
import UserProfileDetails from "../Components/UserProfile/UserProfileDetails";
import { useGetUserProfile } from "../Hooks/UsersHooks";

const Profile = () => {
  const { UserProfile } = useGetUserProfile?.();

  return (
    <main className="min-h-full w-full h-full bg-[#f9fafb] flex items-center justify-center border">
      <div className="mx-auto max-w-6xl px-4 py-8  h-auto w-full ">
        {/* Header */}
        <HeaderUserProfile />

        {/* Divider punteado */}
        <div className="border-b border-dashed border-gray-300 mb-8 mt-6" />

        {/* Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <UserPhotoProfile User={UserProfile}  />
          <UserProfileDetails User={UserProfile}  />
        </section>
      </div>
    </main>
  );
};

export default Profile;
