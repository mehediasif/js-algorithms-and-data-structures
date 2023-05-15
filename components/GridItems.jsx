import React from "react";
import Link from "next/link";
export default function GridItems() {
    return(
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
          href={'/testiRt'}
          className="gridItemsEach"
          rel="noopener noreferrer"
        >
        <h2 className={`mb-3 text-2xl font-semibold`}>
            Basic Problems{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Example Basic Problems
          </p>
        </Link>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Docs{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Find in-depth information about Next.js features and API.
          </p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Learn{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Learn about Next.js in an interactive course with&nbsp;quizzes!
          </p>
        </a>

        

      </div>
    )
}