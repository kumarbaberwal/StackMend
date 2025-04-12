"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathName = usePathname();
    return (
        <nav className="justify-center items-center flex">
            <Link href={'/'} className={pathName === '/' ? "mr-4 text-2xl text-red-400" : "mr-4 text-2xl text-blue-300"}> Home </Link>
            <Link href={'/signup'} className="mr-4 text-2xl text-blue-300"> Signup </Link>
            <Link href={'/login'} className="mr-4 text-2xl text-blue-300"> Login </Link>
            <Link href={'/forgetpassword'} className="mr-4 text-2xl text-blue-300"> Forget Password </Link>
            <Link href={'/error/102'} className="mr-4 text-2xl text-blue-300"> Error </Link>
        </nav>
    );
}