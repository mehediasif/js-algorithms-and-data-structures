'use client'

import Layout from "../../../../components/Layout";
import { Prism } from '@mantine/prism';

export default function MergeSort(){
    return(<Layout>
        <h1 className="text-2xl text-center font-light">Merge Sort Algorithm</h1>
        <div className='cardForText'>
        <h4 className="sortingItems">Merge Sort is a popular and efficient comparison-based sorting algorithm that follows a divide-and-conquer approach. First, It divides the input array into smaller subarrays, sorts them recursively, and then merges the sorted subarrays to obtain the final sorted array.</h4>
        </div>

        <div className="bg-gray-100 border rounded-md border-gray-700 mt-2 px-4 mb-2">
       
        <h3 className="text-xl text-center">Here&lsquo;s how the Merge-Sort algorithm works with example:</h3>
        <ul className="list-decimal p-2 ml-4">
            <li><p>
            Divide the unsorted array into two halves.
            </p>
            </li>

            <li><p>
            Recursively apply Merge Sort to the two halves until each subarray contains only one element (which is inherently sorted).
            </p>
            </li>

            <li><p>
            Merge the sorted subarrays by comparing the elements from each subarray and placing them in the correct order.
            </p>
            </li>

            <li><p>
            Continue merging the subarrays until we obtain a single sorted array.
            </p>
            </li>
        </ul>

        <ul className="list-decimal p-2 ml-4 text-start px-4">
        <h4 className="mb-2 text-indigo-600 font-serif">Suppose we have an array: [5, 2, 8, 1, 3]</h4>
            <li><p>
            Divide the array into two halves: [5, 2] and [8, 1, 3].
            </p>
            </li>

            <li className="border-2 shadow-md mt-2 mb-2 px-2 leading-7 font-BlinkMacSystemFont">
            <p>
            Recursively apply Merge Sort to each half:
            </p>
                <ol className="list-disc ml-4 text-start px-4">
                <li><p>For [5, 2]:</p>

                <ol className="list-disc ml-4 text-start px-4">
                <li><p>Divide into [5] and [2].</p></li>
                <li><p>Merge the two sorted subarrays: [2, 5].</p></li>
                </ol>

                </li>
                <li><p>For [8, 1, 3]:</p>
                <ol className="list-disc ml-4 text-start px-4">
                <li><p>Divide into [8] and [1, 3].</p></li>
                <li><p>Recursively apply Merge Sort to [1, 3]:</p>
                <ul className="list-disc ml-4 text-start px-4">
                
                <li><p>Divide into [1] and [3].</p></li>
                <li><p>Merge the two sorted subarrays: [1, 3].</p></li>

                </ul>
                </li>

                <li><p>Merge [8] and [1, 3]: [1, 3, 8].</p></li>
            </ol>
                </li>
            </ol>
            
            </li>

            <li><p>
            Merge the two sorted halves [2, 5] and [1, 3, 8] to obtain the final sorted array: [1, 2, 3, 5, 8].
            </p>
            </li>

        </ul>
        <h3 className="questionHighlight">Time Complexity:</h3>
        <p className="tracking-wide">
        Merge Sort has a stable time complexity of <i>O(n log n)</i> in all cases, where n is the number of elements in the array. It guarantees good performance even for large datasets and is often preferred when stability or external sorting (sorting large datasets that don&apos;t fit entirely in memory) is required. However, Merge Sort does require additional memory space for the merging process.</p>
        </div>
        </Layout>)
}