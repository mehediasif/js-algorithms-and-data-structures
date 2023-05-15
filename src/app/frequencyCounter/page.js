'use client'
import Layout from "../../../components/Layout";
import { Prism } from '@mantine/prism';

const democode = `function validAnagram(word1, word2){
    // add whatever parameters you deem necessary - good luck!
      if(word1.length !== word2.length){
          return false;
      }
      let firstWord = word1.toLowerCase();
      let secondWord = word2.toLowerCase();
      //Create 2 placeholders to count how many iterations each word has
      let frequencyCounter1 = {};
      let frequencyCounter2 = {};
      
      for (let val of firstWord){
          //Taking every char of firstword and assigning it to the counter for that word
          frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
      }
      for(let val of secondWord){
          frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
      }
      
      for(let key in frequencyCounter1){
          if(!(key in frequencyCounter2)){
              return false;
          }
          if(frequencyCounter2[key] !== frequencyCounter1[key]){
              return false;
          }
      }
      return true;
  }`;
export default function FrequencyCounter(){
    return(
        <Layout>
        <h1 className="pb-4 text-2xl font-semibold text-center">Frequency Counter pattern</h1>
        <div className='cardForText'>
        <h4 className="questionHighlight"><i>Question:</i> What is Frequency Counter in the context of Problem Solving?</h4>
        <p className="bg-gray-50 leading-6 text-start text-blue-800 mt-2">
        <b>Frequency counter:</b> Here we use an object to collect multiple inputs with their count. The advantage is it usually will have big O of O(n) time complexity compared to other approaches that will have big O of O(n²).
        </p>
        </div>
        <div className='cardForText'>
        <h3 className="font-bold">Frequency Counter - validAnagram</h3>
        <p className="bg-gray-50 leading-6 text-start mt-2">Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.</p>
        <div className="bg-gray-100 border rounded-md border-gray-700 mt-4 px-4 mx-4 mb-2">
        <h3 className="mb-2">Examples</h3>
        <ul className="list-decimal px-4 text-gray-600">
        <li>{`validAnagram('', '') // true`}</li>
        <li>{`validAnagram('aaz', 'zza') // false`}</li>
        <li>{`validAnagram('anagram', 'nagaram') // true`}</li>
        <li>{`validAnagram("rat","car") // false) // false`}</li>
        <li>{`validAnagram('awesome', 'awesom') // false`}</li>
        <li>{`validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false`}</li>
        <li>{`validAnagram('texttwisttime', 'timetwisttext') // true`}</li>
        <li>{`validAnagram('qwerty', 'qeywrt') // true`}</li>
        </ul>
        </div>
        <h3 className="mx-auto mt-4">
        Solution:
        </h3>
        <Prism withLineNumbers language="jsx" colorScheme="dark" radius="md">{democode}</Prism>

        </div>
        </Layout>)
}