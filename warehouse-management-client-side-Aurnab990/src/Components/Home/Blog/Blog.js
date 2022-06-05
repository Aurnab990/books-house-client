import React from 'react';

const Blog = () => {
    return (
        <div>
            <div>
                <h1 className='text-3xl text-red-500 mb-4'>Difference between javascript and nodejs</h1>
            <table className="table-fixed border-2 ml-44 text-xl">
                <thead>
                    <tr>
                        
                        <th className='border-2 p-2'>Javascript</th>
                        <th className='border-2 p-2'>Nodejs</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        
                        <td className='border-2 p-2'>It's use for fronted design.</td>
                        <td className='border-2 p-2'>It's use for backend design.</td>
                    </tr>
                    <tr>
                        
                        <td className='border-2 p-2'>Use for client side.</td>
                        <td className='border-2 p-2'>use for server side.</td>
                    </tr>
                    <tr>
                       
                        <td className='border-2 p-2'>Javascript is a programming language</td>
                        <td className='border-2 p-2'>Nodejs is a javascript runtime environment.</td>
                    </tr>
                </tbody>
            </table>
            </div>
            <br></br>
            <div className='ml-44'>
            <a href="/home" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
     src="https://koenig-media.raywenderlich.com/uploads/2014/03/MongoDB.png" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">When should you use nodejs and when should you use mongodb</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here MongoDB is a NoSQL database, which maintain our database. Whereas nodejs is a javascript runtime environment 
                    it's used for server side develop. So we use nodejs because  it's help us to connect to database. That's why we use nodejs to connect MongoDB.</p>
    </div>
</a>
               
            </div>
            <br></br>
            <div className='ml-44'>
            <a href="/home" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
     src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20191104165821/SQL-Vs-NoSQL1.png" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Differences between sql and nosql databases.</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">SQL database is table based where NoSQL database are key or id bassed.SQL databases are vertically scalable & NoSQL databases are horizontally scalable.</p>
    </div>
    </a>
    <br></br>
    <div className='ml-1'>
        
            <a href="/home" class="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
    <img class="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
     src="https://uploads.toptal.io/blog/image/125553/toptal-blog-image-1520247340412-dc6cfd3e7760ea9a8d75a8f9d0b93a77.png" alt=""/>
    <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">What is the purpose of jwt and how does it work

</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">JWT means JSON web token. It's basically used for authenticate user. It secure data for particular user. One user cannot access to see another user's data . So it work for secure user data</p>
    </div>
    </a>


              </div> 
              
            </div>
        </div>
    );
};

export default Blog;