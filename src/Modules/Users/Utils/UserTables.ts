import { useDeleteUser } from "../Hooks/UsersHooks";

 const deleteUserMutation = useDeleteUser();
 
 const handleDelete = (id: number) => {
    const ok = window.confirm("¿Eliminar este usuario?");
    if (!ok) return;
    deleteUserMutation.mutateAsync(id);
  };