import { Redirect, useHistory } from "react-router-dom";

function Stocks() {
  let loggedIn = true;
  let history = useHistory();
  if (!loggedIn) {
    return <Redirect to="/not-logged-in" />;
  }
  const handleClick = () => {
    window.alert("Sending info to the DB!");
    history.push("/");
    console.log(history);
  };
  return (
    <div className="comp orange">
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
