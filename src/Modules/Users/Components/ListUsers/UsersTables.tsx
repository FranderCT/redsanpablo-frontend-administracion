// Components/UsersTable.tsx
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
  type ColumnDef,

} from "@tanstack/react-table";
import type { Users } from "../../Models/Users";

type Props = {
  data: Users[];
};

const UsersTable = ({ data }: Props) => {
  const columns: ColumnDef<Users>[] = [
    {
      id: "FullName",
      header: "Nombre completo",
      cell: ({ row }) => {
        const { Name, Surname1, Surname2 } = row.original;
        return `${Name} ${Surname1} ${Surname2}`;
      },
    },
    {
      accessorKey: "Nis",
      header: "Nis"
    },
    {
      accessorKey : "IDcard",
      header : "Cédula"
    },
    {
      accessorKey: "Email",
      header: "Correo",
    },
    {
      accessorKey: "PhoneNumber",
      header: "Teléfono",
    },
    {
      accessorKey: "Roles",
      header: "Roles",
      cell: ({ row }) =>
        row.original.Roles.map((r) => r.Rolname).join(", ") || "Sin rol",
    },
    {
      accessorKey: "IsActive",
      header: "Estatus",
      cell: ({ row }) => {
      return row.original.IsActive ? "Activo" : "Inactivo";
      },
    }
    ,
    {
      accessorKey : "Address",
      header : "Direccion"
    }
  ];


  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="overflow-x-aut border shadow-xl">
      <table className="min-w-full ">
        <thead className="border-b">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="px-4 py-2 text-[#091540]">
                  {flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100 ">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 py-2 ">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
};

export default UsersTable;
