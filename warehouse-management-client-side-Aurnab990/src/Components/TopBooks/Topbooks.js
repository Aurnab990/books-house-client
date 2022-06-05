import React from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "https://www.metastellar.com/wp-content/uploads/2022/03/vImageforwordpress.jpg" },
    { url: "https://api.time.com/wp-content/uploads/2021/11/10-best-books-fiction-featured-image.jpg" },
    { url: "https://pennbookcenter.com/wp-content/uploads/2020/09/Top-22-Rated-Best-Nicholas-Sparks-Books-To-Read-1.jpg" },
    { url: "https://islandlifenc.com/wp-content/uploads/2020/09/Nicholas-Sparks-The-Return-2.png" },
    { url: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F13%2F2021%2F02%2F01%2Fbest-new-books-february-2021-2000.jpg" },
    { url: "https://static.independent.co.uk/2021/07/16/16/best%20books%20for%20summer.jpg?quality=75&width=982&height=726&auto=webp" },
    { url: "https://www.metastellar.com/wp-content/uploads/2022/03/vImageforwordpress.jpg" },
  ];

const Topbooks = () => {
    return (
        <div className=''>
            <h1 className='text-5xl mt-12 mb-5 font-bold'>Top Rated Books</h1>
            <div className='ml-1'>
                <SimpleImageSlider
                
                    width={1256}
                    height={504}
                    images={images}
                    showBullets={true}
                    showNavs={true}
                />
            </div>
        </div>
    );
};

export default Topbooks;