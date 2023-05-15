"use client"
import Link from "next/link";
//import { useRouter } from "next/router";
import { useRouter } from 'next/navigation';

export default function Navigation(){
    const inactiveNav = "flex mt-2 gap-1 p-1";
    const activeNav = "flex mt-2 gap-1 p-1 bg-gray-50 text-cyan-700 rounded-l-md";
    const router = useRouter();
    return(
        <aside className="bg-slate-600 text-white p-2">
        <nav className="flex flex-col gap-1">
        
        <Link href={'/frequencyCounter'}>Frequency Counter Pattern</Link>
        <Link href={'/'}>Link</Link>
        <Link href={'/'}>Link</Link>
        <Link href={'/'}>Link</Link>
        <Link href={'/'}>Link</Link>
        <Link href={'/'} className={router.pathname === '/' ? activeNav : inactiveNav}>Linkdbdf</Link>


        </nav>
        </aside>
    );
}