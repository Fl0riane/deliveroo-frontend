import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./assets/components/Header";
import Meal from "./assets/components/Meal";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faStar);

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/");
        // console.log(response.data);
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <p>Loading ...</p>
  ) : (
    <div>
      <header>
        <Header />
      </header>
      <div>
        <section className="presentation">
          <div className="container">
            <div>
              <h1> {data.restaurant.name}</h1>
              <h3>{data.restaurant.description}</h3>
            </div>
            <img src={data.restaurant.picture} alt="tartines"></img>
          </div>
        </section>
        <main>
          <div className="container">
            <section className="left">
              {data.categories.map((category) => {
                if (category.meals.length !== 0) {
                  return (
                    <div key={category.path} className="categorie">
                      <h2>{category.name}</h2>
                      <div className="meals-container">
                        {category.meals.map((meal) => {
                          // console.log(categorie.meals);
                          console.log(meal);
                          return <Meal key={meal.id} meal={meal} />;
                        })}
                      </div>
                    </div>
                  );
                } else {
                  return null;
                }
              })}
            </section>
            <section className="col"></section>
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
