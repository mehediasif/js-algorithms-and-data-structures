'use client'
import Layout from "../../../components/Layout";
import SortingGrid from "../../../components/SortingGrid";
import { Prism } from '@mantine/prism';

export default function SortingAlgos(){
    return(
        <Layout>
        <h1 className="pb-4 text-2xl text-center font-light">Sorting Algorithms</h1>
        <div className='cardForText'>
        <h4 className="questionHighlight"><i>Question:</i> What is Sorting Basically?</h4>
        <p className="bg-gray-50 leading-6 text-start text-blue-800 mt-2">
        <b>Sorting</b> Sorting is the process of rearranging items in a collection (such as an array/tree) so that the items inside the collection are in some kind of order.For example,
        <ul className="list-disc p-2 ml-4">
        <li>Sorting Numbers from Largest to smallest</li>
        <li>Sorting Names Alphabetically</li>
        <li>Sorting Movies Based on release Year</li>
        </ul>
        </p>
        </div>
        <div className='cardForText'>
        <p className="bg-gray-50 leading-6 text-start mt-2"><b> Why it’s important:</b> Sorting is an incredibly common tast so it’s important to know how it works.<br />
        Imagine you have a collection of books that you want to arrange in a specific order on your bookshelf. Now, there are several ways you can sort these books, depending on your preference or the purpose of sorting.<br />
        <ul className="list-disc p-2 ml-4">
        <li>
        <p className="bg-gray-100 leading-6 text-start text-slate-900/90">
        For instance, if you want to sort the books alphabetically by their titles, you can use the alphabetical sorting algorithm. This algorithm compares the titles of the books and rearranges them in alphabetical order. It&apos;s like arranging the books on your shelf from A to Z.<br />
        </p>
        

        </li>
        <li>
        <p className="bg-gray-100 leading-6 text-start text-slate-900/90">
        On the other hand, if you want to sort the books based on their publication dates, you can use the chronological sorting algorithm. This algorithm compares the dates when the books were published and organizes them in ascending or descending order. It&apos;s like arranging the books on your shelf from the earliest to the latest or vice versa.<br />
        </p>
        </li>
        </ul>
        
        Now, let&apos;s say you have a large library with thousands of books, and you need to sort them efficiently. In this case, using an algorithm with better performance, such as the quicksort or mergesort algorithm, would be beneficial. Below we can find the most common sorting algorithms.
        </p>
        </div>

        <SortingGrid />
        </Layout>);
}