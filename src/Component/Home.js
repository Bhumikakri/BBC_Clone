import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../Firebase/FirebaseSetup";

const Home = (props) => {
  const [news, setNews] = useState([]);

  const addNews= async (data)=>{
    const newsDoc = doc(database,"News",`${data.url.substr(-10,10)}`);
    try {
        await setDoc(newsDoc,{
            title:data.title,
            description:data.description,
        })
    } catch (error) {
       console.log(error); 
    }
    
  }

  const getNews = () => {
    fetch(
      `http://newsapi.org/v2/everything?q=${
        props.menu ? props.menu : "All"
      }&sortBy=popularity&apiKey=81583e4d27624c989dcb068b2660ac68`
    )
      .then((res) => res.json())
      .then((json) => setNews(json.articles));
  };

  useEffect(() => {
    getNews();
  }, [news]);

  return (
    <div className=" mt-12 p-5 gap-3 grid grid-cols-4">
      {news
        ?.filter((items) => items.title.includes(props.search))
        .map((items, idx) => {
          return (
            <>
              <Link onClick={()=>addNews(items)} to='/details' state={{items:items}}>
                <div
                  key={idx}
                  class="max-w-sm rounded overflow-hidden shadow-lg"
                >
                  <img
                    class="w-full"
                    src={items.urlToImage}
                    alt={items.Title}
                  />
                  <div class="px-6 py-4">
                    <div class="font-bold text-xl mb-2">{items.title}</div>
                    <p class="text-gray-700 text-base">{items.content}</p>
                  </div>
                </div>
              </Link>
            </>
          );
        })}
    </div>
  );
};

export default Home;
