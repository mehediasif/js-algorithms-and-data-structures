'use client'
import Layout from "../../../components/Layout";
import { Prism } from '@mantine/prism';

const demoCode = `
function countUniqueValues(arr){
    let i = 0;
    if (arr.length === 0) {
            return 0;
        }
    for (var j = 0; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
  
}`;

export default function multiplePointers(){
    return(
        <Layout>
        <h1 className="pb-4 text-2xl font-semibold text-center">Multiple Pointers pattern</h1>
        <div className='cardForText'>
        <h4 className="questionHighlight"><i>Question:</i> What is multiplePointers Pattern in the context of Problem Solving?</h4>
        <p className="bg-gray-50 leading-6 text-start text-blue-800 mt-2">
        <b>MultiplePointers:</b> Here we Create pointers or values that correspond to an index or position and move towards the beginning, end or middle based on a certain condition. You can use it on some sort of linear structure, like an array, string or a linked list, to search for a pair of values, or searching for something that meets a condition. You use two reference points in the linear structure, and you work toward the middle.
        </p>
        <p className="bg-gray-50 leading-6 text-start text-blue-800 mt-2"><b>Big O:</b> Time Complexity O(n), Space Complexity O(1)</p>
        <p className="bg-gray-50 leading-6 text-start mt-2"><b> Why it’s good:</b> very efficient for solving problems with minimal space complexity</p>
        </div>
        <div className='cardForText'>
        <h3 className="font-bold">Multiple Pointers - countUniqueValues</h3>
        <p className="bg-gray-50 leading-6 text-start mt-2">Implement a function called <b>countUniqueValues</b>, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.</p>
        <div className="bg-gray-100 border rounded-md border-gray-700 mt-4 px-4 mx-4 mb-2">
        <h3 className="mb-2">Example test cases</h3>
        <ul className="list-decimal px-4 text-gray-600">
        <li>{`countUniqueValues([1,1,1,1,1,2]) // 2`}</li>
        <li>{`countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]) // 7`}</li>
        <li>{`countUniqueValues([]) // 0`}</li>
        <li>{`countUniqueValues([-2,-1,-1,0,1]) // 4`}</li>
        </ul>
        </div>
        <p>
        <b>Bonus:</b>You must do this with constant or O(1) space and O(n) time.
        </p>
        </div>
        <h3 className="mx-auto mt-4">Solution:</h3>
        <Prism withLineNumbers language="jsx" colorScheme="dark" radius="md">{demoCode}</Prism>
        </Layout>

        );
}