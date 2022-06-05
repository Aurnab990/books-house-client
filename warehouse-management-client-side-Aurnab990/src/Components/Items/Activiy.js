import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Article from '../../Article/Article';
import auth from '../../firebase.init';


const Activiy = (props) => {
    const navigate = useNavigate();
    const [user] = useAuthState(auth);
    console.log(props);
    const { name, price, author, available, supplier, description, img } = props.item;
    
    return (
        <div class="p-2 mt-5   ">
            <div class="grid">
  <div>
  <div class="shadow-xl md:flex gap-8 border-2 rounded-lg border-slate-4005  ">
                    <img className='w-30 h-60 pl-5 ml-28 mt-3 ' src={img} alt="" />
                    <h1 className='mt-9 text-4xl'>{name}
                        <h2 className='text-xl text-red-400'>By {author}</h2>
                        <h2 className='text-sm'>{description}</h2>

                        <div className='md:flex gap-8 ml-44'>
                        <p className='text-lg font-semibold'>Price: {price}</p>
                        <p className='text-lg font-semibold'>Available: {available}</p>
                        </div>

                        {
                            user?
                            <button onClick={()=> navigate('/inventories')} className='border-2 text-base bg-red-300 text-white font-semibold hover:text-black hover:bg-red-100 rounded-lg bg-red p-2 w-2/3 '>Manage Stock</button>
                            :
                            <button onClick={()=> navigate('/login')} className='border-2 text-base bg-red-300 text-white font-semibold hover:text-black hover:bg-red-100 rounded-lg bg-red p-2 w-2/3 '>Manage Stock</button>
                            
                            
                        }

                    </h1>

                </div>
  </div>
  
</div>
            


        </div>

  




    );
};

export default Activiy;