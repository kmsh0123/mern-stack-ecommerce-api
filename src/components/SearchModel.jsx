import axios from "axios";
import { Button, Modal } from "flowbite-react";
import { useEffect, useState } from "react";

export function SearchModel() {
  const [openModal, setOpenModal] = useState(false);
  const [query,setQuery] = useState("");
  const [products,setProducts] = useState([]);


  const dataFetch = async () =>{
    const {data} = await axios.get(`https://ecommerce-api-pg2i.onrender.com/api/products?query=${query}`);
    const products = (data?.products);
    setProducts(products)
    console.log(products);
  }
  useEffect(()=>{
    dataFetch()
  },[])


  const handleInputChange = (e) => {
    setQuery(e.target.value);
  };

  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     const {data} = await axios.get(`https://ecommerce-api-pg2i.onrender.com/api/products?query=${query}`);
  //     const products = (data?.products);
  //     setProducts(products)
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };
  return (
    <>
    <div className='flex flex-col items-center container mx-auto'>
    <h1 className='text-2xl text-blue-700 font-semibold my-5'>Product Search App</h1>
    <input 
    className='border outline-none rounded-lg  p-2 pl-2 text-left px-10'
    type="text" 
    placeholder='Search all products'
    onClick={() => setOpenModal(true)}/>
    </div>
   
    <form className='flex flex-col items-center container mx-auto'>
    <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>
        <input 
        className='border outline-none rounded-lg  p-2 pl-2 text-left px-80 pr-[8rem] md:pr-80'
        type="text" 
        placeholder='Search all products'
        value={query}
        onChange={handleInputChange}
        />
        </Modal.Header>
        <Modal.Body>
          <div className="space-y-6">
               {query === '' ? (
        // Display the image if searchQuery is empty
        <h1 className="text-center">Please search want to products</h1>
      ) : (
              products.filter(f=>f.title.toLowerCase().includes(query)).map(pd=>(
              <ul key={pd.id} className="hover:bg-blue-900 hover:text-white">
                <li className="flex">
                 <img className="w-24 h-24 rounded" src={pd.image} alt="" />
                    <div className="space-y-3 flex flex-col">
                      <h6 className="ml-2">{pd.title}</h6>
                      <p className="ml-2">{pd.description}</p>
                      <p className="ml-2">${pd.price}</p>
                    </div>
              </li>
              </ul>
              )
                 ))
               }
          </div>
        </Modal.Body>
      </Modal>
    </form>
     
    </>
  );
}
