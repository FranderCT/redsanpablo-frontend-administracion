const Row = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="grid grid-cols-1 sm:grid-cols-[180px,1fr] gap-2 py-3 border-b border-dashed border-[#091540]/20 last:border-b-0">
    <span className="text-[#091540]/70">{label}</span>
    <div className="text-[#091540] font-semibold">{children}</div>
  </div>
);

const UserProfileDetails = () => {
  return (
    <article className="h-full w-full bg-white border border-[#091540]/20 rounded-xl shadow-sm p-6 lg:p-8">
      <h3 className="text-center text-[#091540] font-extrabold text-lg lg:text-xl mb-4">
        Su información
      </h3>

      <Row label="Correo">
        <a className="underline underline-offset-2" href="mailto:frandercarrillo2@gmail.com">
          frandercarrillo2@gmail.com
        </a>
      </Row>
      <Row label="Fecha de Nacimiento">17-07-2002</Row>
      <Row label="Teléfono">+506 86505959</Row>
      <Row label="Cédula">504440503</Row>
      <Row label="Nis">666</Row>
      <Row label="Rol">Invitado</Row>
      <Row label="Dirección">200 metros al este de carnicería la union</Row>
    </article>
  );
};

export default UserProfileDetails;
