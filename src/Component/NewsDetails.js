import React from 'react';
import { useLocation } from 'react-router-dom';

const NewsDetails=()=>{
    const location = useLocation();

    return(
        <div className=" grid grid-cols-2">
            <div>
                <h1>{location.state.items.title}</h1>
                <h4>{location.state.items.description}</h4>
                <img src={location.state.items.urlToImage} />
            </div>
            <div></div>
        </div>
    )
};

export default NewsDetails;