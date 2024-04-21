import React, { useEffect, useState } from 'react'
import Search from './components/Search'
import Card from './components/Card'
import axios from 'axios';
import { SearchModel } from './components/SearchModel';

const App = () => {
  // const [search,setSearch] = useState("");
  const [products,setProducts] = useState([]);

  const dataFetch = async () =>{
    const {data} = await axios.get("https://ecommerce-api-pg2i.onrender.com/api/products");
    const products = (data?.products);
    setProducts(products)
  }
  useEffect(()=>{
    dataFetch()
  },[])


  return (

    <>
    {/* <div className='flex flex-col items-center container mx-auto'>
      <h1 className='text-2xl text-blue-700 font-semibold my-5'>Product Search App</h1>
      <input 
      className='border border-red-600 outline-none rounded-lg  p-2 pl-2 text-left px-10'
      type="text" 
      placeholder='Search all products'
      onChange={(e)=>setSearch(e.target.value)}
      />
      </div> */}
      <SearchModel/>
        
       <div className='container mx-auto w-[60%] grid grid-cols-3'>
       {
        products?.map(pd=>(
          <Card key={pd.id} pd={pd}/>
        ))
      }
       </div>
        
       
    </>
  )
}

export default App