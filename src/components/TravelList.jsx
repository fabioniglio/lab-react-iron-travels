import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import classes from "../styles/travelList.module.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (travelId) => {
    console.log(travelId);
    setTravelPlans(
      travelPlans.filter(
        (currentDestination) => currentDestination.id !== travelId
      )
    );
    console.log(travelPlans);
  };

  return (
    <>
      <ul>
        {travelPlans.map((currentDestination) => (
          <li key={currentDestination.id} className={classes.ctn}>
            <img
              src={currentDestination.image}
              className={classes.img}
              alt=""
            />
            <div>
              <h2>{currentDestination.destination}</h2>
              <p>{currentDestination.description}</p>
              <p>Duration: {currentDestination.days} days</p>
              <p>
                <strong>Price: </strong>
                {currentDestination.totalCost} €
              </p>
              <div className={classes.conditions}>
                {currentDestination.totalCost >= 1500 && (
                  <p className={classes.blueLabel}>Premium</p>
                )}
                {currentDestination.allInclusive && (
                  <p className={classes.blueLabel}>All-inclusive</p>
                )}

                {currentDestination.totalCost <= 350 && (
                  <p className={classes.greenLabel}>Great Deal</p>
                )}
              </div>
              <button
                type="button"
                onClick={() => handleDelete(currentDestination.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TravelList;
