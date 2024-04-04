import travelPlansData from "../assets/travel-plans.json";
import classes from "./TravelList.module.css";

function TravelList() {
  return (
    <ul>
      {travelPlansData.map((currentDestination) => (
        <li key={currentDestination.id} className={classes}>
          <img src={currentDestination.image} className={classes.img} alt="" />
          <div>
            <h3>{currentDestination.destination}</h3>
            <p>{currentDestination.description}</p>
            <p>
              <strong>Price: </strong>
              {currentDestination.totalCost} Euro
            </p>
            <p>Premium</p>
            <p>All-inclusive</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TravelList;
