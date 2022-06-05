import React, { useState } from 'react';

const Additems = () => {
    const [books, setBooks] = useState([]);
    const[users, setUsers] = useState([]);

    const handleAdditems = event => {
        
        event.preventDefault();
        const name = event.target.name.value;
        const author = event.target.email.value;
        const price = event.target.price.value;
        const description = event.target.description.value;
        const inStock = event.target.stock.value;
        const imgUrl = event.target.imgurl.value;
        const user = { name, author, price, description, inStock, imgUrl };
        //console.log(user);
        

        fetch('https://aqueous-shore-07149.herokuapp.com/books/', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                /*const newBook = [user, data];
                setUsers(newBook); */
                //console.log("Sucess", data);
                alert("New Book Added to My-Items", data);
                
            })


    }

    return (
        <div>
            <h1 className='text-2xl'>Add New Books</h1>
            <form className='mt-4'  onSubmit={handleAdditems}>
                <input className='w-1/3 p-1 border-2' type="text" name='name' placeholder='book name' required />
                <br></br>
                <br></br>
                <input className='w-1/3 p-1 border-2' type="text" name='email' placeholder='Author-name' required />
                <br></br>
                <br></br>
                <input type="text" className='w-1/3 p-1 border-2' name='price' placeholder='Price' required />
                <br></br>
                <br></br>
                <input type="text" className='w-1/3 p-1 border-2' name='stock' placeholder='in stock' required />
                <br></br>
                <br></br>
                <input type="text" className='w-1/3 p-1 border-2' name='description' placeholder='description' required />
                <br></br>
                <br></br>
                <input type="text" className='w-1/3 p-1 border-2' name='imgurl' placeholder='img url' required />
                <br></br>
                <br></br>
                
                <button className='border-2 text-2xl p-2 w-1/3 hover:bg-yellow-200 font-semibold' type='submit'>Add book </button>
            </form>
        </div>
    );
};

export default Additems;