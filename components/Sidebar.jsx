"use client"
import Link from "next/link";
import { useRouter } from 'next/navigation';

export default function Navigation(){
    const router = useRouter();
    const inactiveNav = "flex mt-2 gap-1 p-1";
    const activeNav = "flex mt-2 gap-1 p-1 bg-slate-500 text-red-500 rounded-l-md";
    return(
        <aside className="bg-slate-700 text-white p-2">
            <nav role='navigation' className="flex flex-col gap-1">
            <Link href={'/'} >
            <span className="flex gap-1 px-2 cursor-pointer bg-slate-500 text-black text-clip border-2 border-cyan-500 shadow-md shadow-cyan-400 hover:shadow-lg hover:shadow-blue-500 mb-2 items-center rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                </svg>
                <p>ALGO & DS</p>
            </span>
            </Link>
            
            <Link href='/frequencyCounter'>
            <span className={router.pathname === '/frequencyCounter' ? 'activeNav' : 'inactiveNav'}>Frequency Counter</span>
            </Link>
            <Link href={'/multiplePointers'} className={router.pathname === '/multiplePointers' ? "border-b bg-blue-400" : "border-b"}>Multiple Pointers</Link>
            <Link href={'/'} className="inactiveNav">Sliding Window</Link>
            <Link href={'/'} className="inactiveNav">Divide and Conquer</Link>
            <Link href={'/'}>Dynamic Programming</Link>
            <Link href={'/'} className={router.pathname === '/' ? activeNav : inactiveNav}>Recursion</Link>
            <Link href={'/'} className={router.pathname === '/' ? activeNav : inactiveNav}>Sorting</Link>

            </nav>
        </aside>
    );
}