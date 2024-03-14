
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import Books from './componenets/books/Books';
import Cart from './componenets/cart/Cart';

function App() {

  const [books, setBooks]=useState([]);
  const [carts, setCarts]=useState([]);

  useEffect(()=>{
    fetch('book.json')
    .then(res=> res.json())
    .then(data=>setBooks(data))
  },[])

  const handleAdd =(book)=>{
    const newCarts=[...carts,book]
    setCarts(newCarts);

  }
  console.log(carts)
  

  return (
    <>
      
      <h1 className='text-3xl text-green-400 font-bold' >Book-Store</h1>
      <div className='flex flex-col lg:flex-row justify-between  mt-28'>
        <div className='w-2/3 grid grid-cols-3' >
          {
            books.map(book=><Books 
              key={book.id}
              book={book}
              handleAdd={handleAdd}
            ></Books>)
          }
         
        </div>
        <div className='w-1/3 border-2 border-green-400 p-7 m-5 '>
        <p>Total Cart Item</p>
        
       
       {
          carts.map(cart=><Cart key={cart.id}
          cart={cart}></Cart>)

        }
       
        </div>
      </div>
      
    </>
  )
}

export default App
