function TravelItem({ plan }) {
  return (
    <div>
      <h2>{plan.destination}</h2>
      <p>Duration: {plan.duration}</p>
      <p>Price: {plan.price} €</p>
    </div>
  );
}

export default TravelItem;
