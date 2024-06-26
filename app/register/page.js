import Link from 'next/link';
import { UserCircleIcon, BriefcaseIcon } from '@heroicons/react/solid';

const RegisterTypePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-3xl font-bold  dark:text-slate-50 mb-8">Register As</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link href="/register/user" className="button flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <UserCircleIcon className="h-8 w-8 mr-2" />
            User
        </Link>
        <Link href="/register/doctor" className="button flex items-center justify-center bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <BriefcaseIcon className="h-8 w-8 mr-2" />
            Doctor
        </Link>
        <Link href="/register/medical" className="button flex items-center justify-center bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-md transition duration-300 ease-in-out transform hover:scale-105">
            <UserCircleIcon className="h-8 w-8 mr-2" />
            Medical
        </Link>
      </div>
    </div>
  );
};

export default RegisterTypePage;
