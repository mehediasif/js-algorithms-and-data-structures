"use client"
import Link from "next/link";
import { useRouter, usePathname } from 'next/navigation';

export default function Navigation(){
    const router = usePathname();
    return(
        <aside className="bg-slate-700 text-white p-2">
            <nav role='navigation' className="flex flex-col gap-1">
            <Link href={'/'} >
            <span className="flex gap-1 px-2 cursor-pointer bg-slate-500 text-black text-clip border-2 border-cyan-500 shadow-md shadow-cyan-400 hover:shadow-lg hover:shadow-pink-700 mb-2 pr-2 items-center rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
            </svg>          
                <p>ALGO & DS</p>
            </span>
            </Link>
            
            <Link href={'/frequencyCounter'} className={router === '/frequencyCounter' ? 'activeNav' : 'inactiveNav'}>
            Frequency Counter
            </Link>
            <Link href={'/multiplePointers'} className={router === "/multiplePointers" ? 'activeNav' : 'inactiveNav'}>Multiple Pointers</Link>
            <Link href={'/slidingWindow'} className={router === "/slidingWindow" ? 'activeNav' : 'inactiveNav'}>Sliding Window</Link>
            <Link href={'/divideAndConquer'} className={router === '/divideAndConquer' ? 'activeNav' : 'inactiveNav'}>Divide and Conquer</Link>
            <Link href={'/dynamicProgramming'} className={router === '/dynamicProgramming' ? 'activeNav' : 'inactiveNav'}>Dynamic Programming</Link>
            <Link href={'/recursion'} className={router === '/recursion' ? "activeNav" : "inactiveNav"}>Recursion</Link>
            <Link href={'/searching'} className={router === '/searching' ? "activeNav" : "inactiveNav"}>Searching</Link>
            <Link href={'/sorting'} className={router === '/sorting' ? "activeNav" : "inactiveNav"}>Sorting</Link>
            <p className="items-end border-2">Current pathname: {router}</p>
            </nav>
        </aside>
    );
}