import React, { useEffect, useState } from 'react';

import Activiy from './Activiy';

const Itesm = () => {
    const [items, setItems] = useState([]);

    useEffect( () => {
        fetch('bookDetails.json')
        .then(res => res.json())
        .then(data => setItems(data))
    } ,[])
    return (
        <div>
            <h1 className='text-7xl mt-20  font-semibold'>Our Famous Books List</h1>
            {
                items.map(item => <Activiy
                key = {item.id}
                item ={item}></Activiy>)
            }
            
            
        </div>
    );
};

export default Itesm;