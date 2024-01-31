import React from 'react';
import { useLocation } from 'react-router-dom';
import Comment from './Comment';

const NewsDetails=()=>{
    const location = useLocation();

    return(
        <div className=" grid grid-cols-2">
            <div className='p-5'>
                <h1 className=' text-3xl font-extrabold'>{location.state.items.title}</h1>
                <h4 className=' text-xl font-normal'>{location.state.items.description}</h4>
                <img src={location.state.items.urlToImage} />
            </div>
            <div>
                <Comment url={location.state.items.url} />
            </div>
        </div>
    )
};

export default NewsDetails;