import { Outlet } from '@tanstack/react-router';


const AuthLayout = () => {
  return (
    <div className='h-screen w-screen flex flex-col items-center justify-center bg-[#E5E5E5] bg-[url(/)]  bg-cover bg-center'>
      <Outlet /> 
    </div>
  )
}

export default AuthLayout;

