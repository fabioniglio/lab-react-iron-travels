import { useState } from "react";
import travelPlansData from "../assets/travel-plans.json";
import classes from "../styles/travelList.module.css";

function TravelList() {
  const [travelPlans, setTravelPlans] = useState(travelPlansData);

  const handleDelete = (travelId) => {
    console.log(travelId);
    setTravelPlans(
      travelPlans.filter(
        (currentDestination) => currentDestination.Id !== travelId
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
              <h3>{currentDestination.destination}</h3>
              <p>{currentDestination.description}</p>
              <p>
                <strong>Price: </strong>
                {currentDestination.totalCost} Euro
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
