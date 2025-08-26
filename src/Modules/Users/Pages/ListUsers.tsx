// src/Modules/Users/Pages/ListUsers.tsx
import UsersTables from "../Components/ListUsers/UsersTables";
import { useGetAllUsers } from "../Hooks/UsersHooks";

const ListUsers = () => {
  const { users = [], error } = useGetAllUsers();

  
  if (error) return <p>Ocurrió un error cargando usuarios.</p>;
  if (!users.length) return <p>No hay usuarios.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="p-2 text-left">Nombre</th>
            <th className="p-2 text-left">Correo</th>
            <th className="p-2 text-left">Teléfono</th>
            <th className="p-2 text-left">Rol</th>
          </tr>
        </thead>
        <tbody>
          {users.map((u) => (
            <UsersTables key={u.Id ?? u.Email} user={u} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListUsers;
