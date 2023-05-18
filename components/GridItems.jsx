import React from "react";
import Link from "next/link";
export default function GridItems() {
    return(
      <>
        <div className="mb-16 grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">

        <Link 
          href={'/frequencyCounter'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            FC Pattern{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of FrequencyCounter Pattern
          </p>
        </Link>

        <Link 
          href={'/multiplePointers'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl text-center font-semibold`}>
            MP Pattern{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Multiple Pointers Pattern
          </p>
        </Link>

        <Link 
          href={'/slidingWindow'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Sliding Window{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Example of Sliding Window Pattern
          </p>
        </Link>

        <Link 
          href={'/divideAndConquer'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Divide And Conquer{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Example of Divide and Conquer
          </p>
        </Link>

        <Link 
          href={'/dynamicProgramming'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Dynamic Programming{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Dynamic Programming
          </p>
        </Link>
        
        <Link 
          href={'/recursion'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Recursion{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Recursion 
          </p>
        </Link>

        <Link 
          href={'/searching'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Searching{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Searching Algorithms 
          </p>
        </Link>

        <Link 
          href={'/sorting'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Sorting Algorithms{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Every Sorting Techniques 
          </p>
        </Link>

      </div>
      <div className="relative flex inset-y-0 right-8 left-8 top-1/3 h-4/8 w-8/12">
      
      <div className="group rounded-lg border border-transparent absolute inset-x-5 bottom-0 px-2 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100">
      <h2 className={`mb-3 text-2xl font-medium`}>Made with <span className="text-[#e25555]">♥</span> using the latest features of NextJS</h2>
      <Link
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;<p className={`m-0 max-w-[30ch] text-sm opacity-50`}>Find in-depth information about Next.js features and API.</p>
        </span>
      </Link>
      </div>
      </div>

      </>
    )
}