import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";

function CityItem({ city, deleteCity }) {
  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      month: "long",
      year: "numeric",
      weekday: "long",
    }).format(new Date(date));

  const { cityName, emoji, date, id } = city;
  return (
    <div>
      <li>
        <Link to={`${id}`} className={styles.cityItem}>
          <span className={styles.emoji}>{emoji}</span>
          <h3 className={styles.name}>{cityName}</h3>
          <time className={styles.date}>({formatDate(date)})</time>
          <button
            className={styles.deleteBtn}
            onClick={() => deleteCity(city.id)}
          >
            &times;
          </button>
        </Link>
      </li>
    </div>
  );
}

export default CityItem;
