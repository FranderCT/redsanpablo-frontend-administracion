
import { type ColumnDef } from "@tanstack/react-table";
import type { Users } from "../../Models/Users";

export const usersColumns: ColumnDef<Users>[] = [
  {
    id: "FullName",
    header: "Nombre completo",
    cell: ({ row }) => {
      const { Name, Surname1, Surname2 } = row.original;
      return `${Name} ${Surname1} ${Surname2}`;
    },
  },
  { accessorKey: "Nis", header: "Nis" },
  { accessorKey: "IDcard", header: "Cédula" },
  { accessorKey: "Email", header: "Correo" },
  { accessorKey: "PhoneNumber", header: "Teléfono" },
  {
    accessorKey: "Roles",
    header: "Roles",
    cell: ({ row }) => row.original.Roles.map((r) => r.Rolname).join(", ") || "Sin rol",
  },
  {
    accessorKey: "IsActive",
    header: "Estatus",
    cell: ({ row }) => (row.original.IsActive ? "Activo" : "Inactivo"),
  },
  { accessorKey: "Address", header: "Dirección" },
  {accessorKey: "Acciones", header : "Acciones"},
];
