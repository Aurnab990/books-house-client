import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate, useResolvedPath } from 'react-router-dom';


import auth from '../../../firebase.init';



const Inventories = () => {
  const [books, setBooks] = useState([]);
  const [user] = useAuthState(auth);



  useEffect(() => {
    fetch('https://aqueous-shore-07149.herokuapp.com/books/')
      .then(res => res.json())
      .then(data => setBooks(data.slice(0, 15)));
  }, [])

  if (!user) {
    return <Navigate to='/login'></Navigate>

  }


  return (
    <div>
      {
        user ?
          <div className=''>

            {
              books.map(book => <table key={book._id} className="border-collapse border border-slate-500 ...">
                <thead>
                  <tr>
                    <th className="border border-slate-600 ...">Book</th>
                    <th className="border border-slate-600 ...">Name & Author</th>
                    <th className="border border-slate-600 ...">Description</th>

                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-700 w-1/4 ..."> <div className='flex gap-6'><img className='w-1/4 ml-24' src={book.img} alt="" />  <img className='w-1/4 ' src="https://laz-img-cdn.alicdn.com/images/ims-web/TB1WLktrNYaK1RjSZFnXXa80pXa.png" alt="" /></div>
                      <div>
                        <h1 className='flex gap-2 mt-2'>
                          <button className='mb-5 bg-orange-200 pl-2 rounded hover:bg-red-400 bg-orange-200 hover:text-white  font-semibold p-3 ml-3'>Delivered</button> <p className='mb-5 bg-orange-200 pl-2 rounded hover:bg-yellow-300 font-semibold p-3 ml-3'>{book.price}</p>
                          <p className='mb-5 bg-orange-200 pl-2 rounded hover:bg-yellow-300 font-semibold p-3 ml-3'>Stock: {book.available}</p>


                        </h1>
                        <h2 className='mb-2'><Link to='/update'><button className='bg-orange-200 hover:bg-yellow-300 p-2 rounded-xl'>update</button></Link> </h2>
                      </div> </td>

                    <td class="border border-slate-700 w-1/4 ..."><h1 className='text-xl font-bold'>{book.name}</h1><br></br>{book.author}</td>
                    <td class="border border-slate-700 text-sm w-2/5 ...">{book.description}</td>


                  </tr>

                </tbody>
              </table>)
            }
          </div>
          :
          <Navigate to='/login'></Navigate>
      }
    </div>
  );
};

export default Inventories;