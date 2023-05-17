'use client'

import Layout from "../../../../components/Layout";
import { Prism } from '@mantine/prism';

export default function SelectionSort(){
    return(<Layout>
        <h1 className="text-2xl text-center font-light">Selection Sort Algorithm</h1>
        <div className='cardForText'>
        <h4 className="sortingItems">Selection Sort is another simple comparison-based sorting algorithm. It works by dividing the input array into two portions: the sorted portion at the beginning and the unsorted portion at the end. The algorithm repeatedly selects the smallest (or largest) element from the unsorted portion and places it at the end of the sorted portion.</h4>
        </div>

        <div className="bg-gray-100 border rounded-md border-gray-700 mt-2 px-4 mb-2">
       
        <h3 className="text-xl text-center">Here&lsquo;s how the Selection Sort algorithm works with example:</h3>
        <ul className="list-decimal p-2 ml-4">
            <li><p>
            Start with an unsorted array of elements.
            <p className="p-1 ml-2 font-light">Suppose we have an array: [5, 2, 8, 1, 3]<br />So, In the first iteration, we find the smallest element, which is 1.</p>
            </p></li>

            <li><p>
            Divide the array into two portions: the sorted portion and the unsorted portion.
            </p>
            <p className="p-1 ml-2 font-light">We swap 1 with the first element, resulting in: [1, 2, 8, 5, 3]</p>
            </li>

            <li><p>
            In each iteration, find the smallest (or largest) element from the unsorted portion.
            </p>
            <p className="p-1 ml-2 font-light">The sorted portion expands, and the unsorted portion reduces.</p>
            </li>

            <li><p>
            Swap the smallest (or largest) element with the first element of the unsorted portion.
            </p>
            <p className="p-1 ml-2 font-light">In the second iteration, we find the smallest element from the remaining unsorted portion, which is 2.</p>
            </li>

            <li><p>
            Expand the sorted portion by one element by moving the boundary between the sorted and unsorted portions.
            </p>
            <p className="p-1 ml-2 font-light">We swap 2 with the second element, resulting in: [1, 2, 8, 5, 3]</p>
            </li>

            <li><p>
            Repeat steps 3-5 until the entire array is sorted.
            </p>
            <p className="p-1 ml-2 font-light">We continue this process until the array is fully sorted.</p>
            </li>
        </ul>
        <h3 className="questionHighlight">Time Complexity:</h3>
        <p className="tracking-wide">Selection Sort has a time complexity of <i>O(n^2)</i> in the worst and average cases, where n is the number of elements in the array. Similar to Bubble Sort, it is not particularly efficient for large datasets. However, Selection Sort performs fewer swaps compared to Bubble Sort, which can be advantageous in scenarios where swapping elements is costly. Selection Sort is often used for educational purposes or when simplicity and minimal memory usage are more important than efficiency.</p>
        </div>
        </Layout>)
}