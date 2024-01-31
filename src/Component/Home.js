import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
  const [news, setNews] = useState([]);

  const getNews = () => {
    fetch(
      `https://newsapi.org/v2/everything?q=${
        props.menu ? props.menu : "All"
      }&sortBy=popularity&apiKey=e1f0a85628084a60bcc40ea8ec2c2a53`
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
              <Link to='/details' state={{items:items}}>
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
