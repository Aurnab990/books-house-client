import React from 'react';
import Itesm from '../Items/Itesm';
import Topbooks from '../TopBooks/Topbooks';

const Home = () => {
    return (
        <div>

            <div class="p-5 grid md:grid-cols-3 gap-4 ">
                
                <div class="md:flex border-2 rounded-lg border-slate-4005 bg-white border-dotted shadow-2xl ">
                    <img className='w-40 mt-7' src="https://static.vecteezy.com/system/resources/thumbnails/003/704/410/small_2x/disability-blind-man-reading-braille-book-concept-free-vector.jpg" alt="" />
                    <h1 className='mt-9 text-xl'>Read Your Favourite Book
                    <p className='text-sm'>Millions of books available through controlled Digital Landing</p>
                    <br></br>
                    <br></br> 
                    <button className='border-2 bg-red-300 text-white font-bold hover:text-black hover:bg-red-100 rounded-lg bg-red p-2 w-2/3 mb-5'>Read</button>
                    
                    </h1>
                    
                </div>
                
                <div class="flex border-2 rounded-lg border-slate-4005 bg-white border-dotted shadow-2xl">
                    <img className='w-40 mt-7' src="https://static.vecteezy.com/system/resources/thumbnails/001/266/388/small_2x/boy-sitting-on-books-and-reading-a-book.jpg" alt="" />
                    <h1 className='mt-9 text-xl'>Track your favourite book
                    <p className='text-sm'>Organize your Books using Lists & the Reading Log</p>
                    <br></br>
                    
                    
                    
                    <button className='border-2 bg-red-300 text-white font-bold hover:text-black hover:bg-red-100 rounded-lg bg-red p-2 w-2/3 mt-7'>Read</button>
                    
                    </h1>
                    
                </div>
                <div class="flex border-2 rounded-lg border-slate-4005 bg-white border-dotted shadow-2xl">
                    <img className='w-40 mt-7' src="https://img.freepik.com/free-vector/library-book-shop-mobile-online-isometric-concept-micro-people-buying-books_106788-1403.jpg" alt="" />
                    <h1 className='mt-9 text-xl'>Buy Your Favourite Book
                    <p className='text-sm'>We deliver your before you sleep.From anywhere you can order. We active 24/7.</p>
                    <br></br>
                    
                    <button className='border-2 bg-red-300 text-white font-bold hover:text-black hover:bg-red-100 rounded-lg bg-red p-2 w-2/3 mt-2'>Read</button>
                    
                    </h1>
                    
                </div>
                
            </div>
            <Topbooks></Topbooks>
            <div>
            <Itesm></Itesm>
            </div>
        </div>
    );
};

export default Home;