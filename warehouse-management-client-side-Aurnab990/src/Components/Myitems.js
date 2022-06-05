
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Navigate } from 'react-router-dom';
import auth from '../firebase.init';



const Myitems = () => {
    const [books, setBooks] = useState([]);
    const [user] = useAuthState(auth);
    



    useEffect(() => {
        fetch('https://aqueous-shore-07149.herokuapp.com/books/')
            .then(res => res.json())
            .then(data => setBooks(data.slice(15,50)));
    }, []);

    const handleDelete = id =>{
        const proceed = window.confirm("Are you sure to Delete?");
        if(proceed){
            console.log("Deleting user id:", id);
            const url = `https://aqueous-shore-07149.herokuapp.com/books/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingItems = books.filter(users => users._id !== id);
                setBooks(remainingItems);
            })
        }
    }

    
    
    return (
        <div>
            <h1 className='text-2xl font-semibold'>Your Added Items</h1>
            {
                user ?
                    <div className=''>
                        
                        {
                            books.map(users => <table class="table-fixed w-4/5 ml-10  ">
                            <thead className='border-2'>
                              <tr>
                                
                                <th className='w-2/5 '></th>
                                <th className='w-2/5'></th>
                                <th className='w-1/5 '></th>
                                <th className='w-1/5'></th>
                                <th className='w-1/5'></th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                
                                <td className='w-1/5 text-xl font-semibold bg-yellow-200'> {users.name}</td>
                                <td className='w-1/5 bg-slate-200'>by {users.author}</td>
                                <td className='w-1/5 bg-orange-200' >${users.price}</td>
                                
                                <td className='w-1/5'> <div className='flex'>
                                <button onClick={() => handleDelete(users._id)} className='bg-red-500 p-2 w-2/3 text-white font-bold rounded-xl'>Delete  </button> 
                                <img className='w-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt8HBVyhlUd5WFQJXFtpIltnV80y6g_sd7MQ&usqp=CAU" alt="" />
                                </div></td>
                                <td className='w-1/5'> <Link to={`/update/${users._id}`}><button  className='bg-green-600 p-2 w-2/3 text-white font-bold rounded-xl'>Update</button></Link> </td>
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

export default Myitems;