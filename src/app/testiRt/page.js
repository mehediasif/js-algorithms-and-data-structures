'use client'
import Layout from "../../../components/Layout";
import Link from "next/link";
import React, { useState } from "react";

function Card({children}) {
    return <div className="flex flex-shrink-0 w-full h-full mt-2">
        {children}
         </div>
}

export default function TestiRt(){
    const [activeStatus, setActiveStatus] = useState();
    return(
        <Layout>
        <div className="max-w-screen mx-auto rounded-b-[1.5rem] bg-cyan-700 p-6 flex gap-2 items-center text-white drop-shadow-md">
            <h1 className="flex justify-start items-start">Basic Problems</h1>
            <p className="text-base leading-4 text-center text-gray-800 mt-2">
        User Documentation is divided into five sections click on the sections above to find relative information.
        </p> 
        </div>
        <Card>
        <p className="text-base leading-4 mb-6 text-center text-gray-800 mt-2">
        User Documentation is divided into five sections click on the sections above to find relative information.
        </p>
        </Card>

        </Layout>)
}