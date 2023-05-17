'use client'

import Layout from "../../../../components/Layout";
import { Prism } from '@mantine/prism';

export default function BubbleSort(){
    return(<Layout>
        <h1 className="text-2xl text-center font-light">BubbleSort Algorithm</h1>
        <div className='cardForText'>
        <h4 className="sortingItems">Bubble Sort is a simple comparison-based sorting algorithm that repeatedly swaps adjacent elements if they are in the wrong order. It gets its name from the way smaller or larger elements &quot;bubble&quot; to their correct positions within the array.</h4>
        </div>

        <div className="bg-gray-100 border rounded-md border-gray-700 mt-2 px-4 mb-2">
       
        <h3 className="text-xl text-center">Here&lsquo;s how the Bubble Sort algorithm works with example:</h3>
        <ul className="list-decimal p-2 ml-4">
            <li><p>
            Start with an unsorted array of elements.
            <p className="p-1 ml-2 font-light">Suppose we have an array: [5, 2, 8, 1, 3].<br />So, In the first pass, we compare 5 and 2, swap them, and the array becomes: [2, 5, 8, 1, 3]</p>
            </p></li>

            <li><p>
            Compare each pair of adjacent elements in the array.
            </p>
            <p className="p-1 ml-2 font-light">We compare 5 and 8, no swap is needed.</p>
            </li>

            <li><p>
            If the elements are in the wrong order (e.g., if the current element is greater than the next element in ascending order), swap them.
            </p>
            <p className="p-1 ml-2 font-light">We compare 8 and 1, swap them: [2, 5, 1, 8, 3]</p>
            </li>

            <li><p>
            Continue iterating through the array and performing swaps until no more swaps are needed.
            </p>
            <p className="p-1 ml-2 font-light">We compare 8 and 3, swap them: [2, 5, 1, 3, 8]</p>
            </li>

            <li><p>
            The largest (or smallest) element will &quot;bubble&quot; to the end (or beginning) of the array after each iteration.
            </p>
            <p className="p-1 ml-2 font-light">The first pass is complete, and the largest element, 8, is now at the end.</p>
            </li>

            <li><p>
            Repeat the above steps until the entire array is sorted.
            </p>
            <p className="p-1 ml-2 font-light">We repeat the process for the remaining elements in subsequent passes until the array is fully sorted.</p>
            </li>
        </ul>
        <h3 className="questionHighlight">Time Complexity:</h3>
        <p className="tracking-wide">Bubble Sort has a time complexity of <i>O(n^2)</i> in the worst and average cases, where n is the number of elements in the array. It is not particularly efficient for large datasets, but it is easy to understand and implement.</p>
        </div>
        </Layout>)
}