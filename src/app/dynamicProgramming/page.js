'use client'
import Layout from "../../../components/Layout";
import { Prism } from '@mantine/prism';

export default function DynamicProgramming(){
    return(
        <Layout>
        <h1 className="pb-4 text-2xl font-semibold text-center">Dynamic Programming pattern</h1>
        <div className='cardForText'>
        <h4 className="questionHighlight"><i>Question:</i> What is multiplePointers Pattern in the context of Problem Solving?</h4>
        <p className="bg-gray-50 leading-6 text-start text-blue-800 mt-2">
        <b>MultiplePointers:</b> Here we Create pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. You can use it on some sort of linear structure, like an array, string or a linked list, to search for a pair of values, or searching for something that meets a condition. You use two reference points in the linear structure, and you work toward the middle.
        </p>
        <p className="bg-gray-50 leading-6 text-start text-blue-800 mt-2"><b>Big O:</b> Time Complexity O(n), Space Complexity O(1)</p>
        <p className="bg-gray-50 leading-6 text-start mt-2"><b> Why it’s good:</b> very efficient for solving problems with minimal space complexity</p>
        </div>
        </Layout>);
}