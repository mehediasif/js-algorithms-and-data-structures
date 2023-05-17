import React from "react";
import Link from "next/link";

export default function SortingGrid(){
    return (
        <>
        <div className="mb-16 grid gap-2 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        
        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Bubble Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Bubble Sort
          </p>
        </Link>

        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl text-center font-semibold`}>
            Selection Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Selection Sort
          </p>
        </Link>

        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Insertion Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Example of Insertion Sort
          </p>
        </Link>

        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
        Merge Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
          Example of Merge Sort
          </p>
        </Link>

        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
        Quick Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Quick Sort
          </p>
        </Link>
        
        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
        Heap Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Heap Sort 
          </p>
        </Link>

        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
        Radix Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Radix Sort 
          </p>
        </Link>

        <Link 
          href={'/'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
        Bucket Sort{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example of Bucket Sort 
          </p>
        </Link>
        </div>
        </>
    );
}