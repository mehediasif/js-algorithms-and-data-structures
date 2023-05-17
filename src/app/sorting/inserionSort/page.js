'use client'

import Layout from "../../../../components/Layout";
import { Prism } from '@mantine/prism';

export default function InsertionSort(){
    return(<Layout>
        <h1 className="text-2xl text-center font-light">Insertion Sort Algorithm</h1>
        <div className='cardForText'>
        <h4 className="sortingItems">Insertion Sort is a simple comparison-based sorting algorithm that builds the final sorted array one element at a time. It works by iteratively considering each element in the unsorted portion and inserting it into its correct position within the sorted portion.</h4>
        </div>

        <div className="bg-gray-100 border rounded-md border-gray-700 mt-2 px-4 mb-2">
       
        <h3 className="text-xl text-center">Here&lsquo;s how the the Insertion Sort algorithm works with example:</h3>
        <ul className="list-decimal p-2 ml-4">
            <li><p>
            Start with an unsorted array of elements.
            </p></li>

            <li><p>
            Divide the array into two portions: the sorted portion at the beginning and the unsorted portion at the end.
            </p>
            </li>

            <li><p>
            Take the first element from the unsorted portion and compare it with the elements in the sorted portion, moving from right to left.
            </p>
            </li>

            <li><p>
            If the element is smaller (or larger, depending on the desired sorting order) than the compared element, shift the compared element one position to the right.
            </p>
            </li>

            <li><p>
            Repeat step 4 until you find the correct position for the element in the sorted portion.
            </p>
            </li>

            <li><p>
            Insert the element at its correct position within the sorted portion.
            </p>
            </li>

            <li><p>
            Expand the sorted portion by one element by moving the boundary between the sorted and unsorted portions.
            </p>
            </li>

            <li><p>
            Repeat steps 3-7 until the entire array is sorted.
            </p>
            </li>
        </ul>

        <ul className="list-disc p-2 ml-4 text-start font-serif px-4">
            <h4 className="mb-2 text-indigo-600">Example:</h4>
            <p className="p-1">Suppose we have an array: [5, 2, 8, 1, 3]</p>
            <li><p>
            In the first iteration, we consider the second element (2) in the unsorted portion.
            </p></li>

            <li><p>
            We compare 2 with 5 in the sorted portion and shift 5 to the right.
            </p>
            </li>

            <li><p>
            The array becomes: [2, 5, 8, 1, 3]
            </p>
            </li>

            <li><p>
            We insert 2 at its correct position within the sorted portion.
            </p>
            </li>

            <li><p>
            The sorted portion expands, and the unsorted portion reduces.
            </p>
            </li>

            <li><p>
            In the second iteration, we consider the third element (8) in the unsorted portion.
            </p>
            </li>

            <li><p>
            We compare 8 with 5 in the sorted portion, no shift is needed.
            </p>
            </li>

            <li><p>
            We insert 8 at its correct position within the sorted portion.
            </p>
            </li>

            <li><p>
            We continue this process until the array is fully sorted.
            </p>
            </li>
        </ul>
        <h3 className="questionHighlight">Time Complexity:</h3>
        <p className="tracking-wide">Insertion Sort has a time complexity of O(n^2) in the worst and average cases, where n is the number of elements in the array. It performs well on small arrays or partially sorted arrays but becomes less efficient as the array size grows. Insertion Sort is often used for educational purposes or when sorting small datasets or nearly sorted arrays where simplicity and efficiency for small inputs are desirable.</p>
        </div>
        </Layout>)
}