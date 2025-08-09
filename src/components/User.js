import { useState } from "react";

const User = ({ name, location }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="user-card">
      <h1>Count:{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <h1>{name}</h1>
      <h3>{location}</h3>
      <h3>Contact: 1234567890</h3>
    </div>
  );
};
export default User;
