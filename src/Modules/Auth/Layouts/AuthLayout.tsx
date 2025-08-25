import { Outlet } from '@tanstack/react-router';


const AuthLayout = () => {
  return (
    <div className='h-[100dvh]  w-screen flex flex-col items-center justify-center bg-[#]  bg-cover bg-center sm:h-screen '>
      <Outlet /> 
    </div>
  )
}

export default AuthLayout;

