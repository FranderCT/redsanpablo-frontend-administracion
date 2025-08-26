// Components/ListUsers.tsx
import UsersTables from "../Components/ListUsers/UsersTables";
import { useGetAllUsers } from "../Hooks/UsersHooks";


const ListUsers = () => {
  const { usersProfiles, isPending, error } = useGetAllUsers();

  if (isPending) return <p>Cargando...</p>;
  if (error) return <p>Ocurrió un error cargando usuarios</p>;

  return (
    <div className="overflow-x-auto">
      {usersProfiles?.map((user) => (
        <UsersTables key={user.Id} user={user} />
      ))}
    </div>
  );
};

export default ListUsers;
