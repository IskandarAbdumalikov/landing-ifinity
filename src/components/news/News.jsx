import React, { useEffect, useState } from "react";
import "./news.scss";
import axios from "axios";

const News = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products?limit=4")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <div className="news">
      <div className="news__cards container">
        <h1>Latest news about job trends</h1>
        {data?.products?.map((product) => (
          <div
            key={product.id}
            className="news__cards__card
          "
          >
            <img src={product.thumbnail} alt="" />
            <div className="news__cards__card__info">
              <h3>{product.description}</h3>
              <div className="price">
                <p>${product.price}</p>
                <p>{product.rating} stars</p>
              </div>
            </div>
          </div>
        ))}
        <button>See all blog posts</button>
      </div>
    </div>
  );
};

export default News;
