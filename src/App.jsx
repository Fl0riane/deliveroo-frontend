import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "./assets/Header";

import "./App.css";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div>
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <div className="main">
            <section className="presentation">
              <span>
                <h1> {data.restaurant.name}</h1>
                <p>{data.restaurant.description}</p>
              </span>
              <img src="https://f.roocdn.com/images/menus/17697/header-image.jpg"></img>
            </section>
            <section>
              <h2>
                {data.categories.map((categorie) => {
                  return (
                    <div key={categorie.path} className="categorie">
                      <h2>{categorie.name}</h2>
                      <div>
                        {
                          data.categories.meals.map((elem, id) => {
                            return (
                              <div key={id}>
                                <h3>{elem.title}</h3>
                                <h4>{elem.description}</h4>
                                <p>{elem.price}</p>
                              </div>
                            );
                          }).title
                        }
                      </div>
                      <h4>{categorie.description}</h4>
                      <p>{categorie.price}</p>
                    </div>
                  );
                })}
              </h2>
              <span></span>
            </section>
            <section></section>
            <section></section>
            <section></section>
            <section></section>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
