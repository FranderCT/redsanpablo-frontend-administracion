// Components/ListUsers.tsx
import UsersTable from "../Components/ListUsers/UsersTables";
import { useGetAllUsers } from "../Hooks/UsersHooks";

const ListUsers = () => {
  const { usersProfiles, isPending, error } = useGetAllUsers();

  if (isPending) return <p>Cargando...</p>;
  if (error) return <p>Ocurrió un error cargando usuarios</p>;

  return (
    <div>
      {usersProfiles && <UsersTable data={usersProfiles} />}
    </div>
  );
};

export default ListUsers;
