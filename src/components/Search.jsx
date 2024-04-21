import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from "flowbite-react";
import { SearchModel } from './SearchModel';

const Search = () => {
  const [query,setQuery] = useState("");
  const [products,setProducts] = useState([]);


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const {data} = await axios.get(`https://ecommerce-api-pg2i.onrender.com/api/products?query=${query}`);
      const products = (data?.products);
      setProducts(products)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className='flex flex-col items-center container mx-auto'>
    <h1 className='text-2xl text-blue-700 font-semibold my-5'>Product Search App</h1>
      <input 
      className='border border-red-600 outline-none rounded-lg  p-2 pl-2 text-left px-10'
      type="text" 
      placeholder='Search all products'
      value={query}
      onChange={handleInputChange}
      />
      {
      //   <ul>
      //   {products.map(result => (
      //     <li key={result.id}>{result.title}</li>
      //   ))}
      // </ul>
      }
      {/* <SearchModel/> */}
    </form>
  )
}

export default Search