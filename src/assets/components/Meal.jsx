import replaceDotByComa from "../utils/replaceDotByComa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Meal = ({ meal }) => {
  return (
    <article>
      <div>
        <h4>{meal.title}</h4>
        {meal.description && (
          <h5 className="meal-description">{meal.description}</h5>
        )}
        <div className="price-popular">
          <h5>{replaceDotByComa(meal.price)} €</h5>
          {meal.popular && (
            <p className="popular">
              <FontAwesomeIcon icon="star" />
              Populaire
            </p>
          )}
        </div>
      </div>
      {meal.picture && <img src={meal.picture} alt={meal.title} />}
    </article>
  );
};

export default Meal;
