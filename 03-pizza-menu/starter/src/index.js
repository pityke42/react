import React from "react";
import ReactDOM from "react-dom/client";
// import pizzaData from "../public/data";
import "./index.css";

function App() {
  return (
    <div className="contanier">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const style = {
  //   color: "red",
  //   fontSize: "48px",
  //   textTransform: "uppercase",
  // };
  const style = {};
  return (
    <header className="header">
      <h1 style={style} className="header">
        Fast React Pizza Company
      </h1>
    </header>
  );
}

function Menu() {
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      <Pizza
        name="Pizza Spinachi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas\spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={22}
        photoName="pizzas/funghi.jpg"
      />
    </main>
  );
}

function Pizza(props) {
  console.log(props);
  return (
    <div className="pizza">
      <img src={props.photoName} alt={props.name} />
      <div>
        <h3>{props.name}</h3>
        <p>{props.ingredients}</p>
        <span>{props.price + 3}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open");
  // } else {
  //   alert("Sorry we are closed");
  // }
  return (
    <footer className="footer">
      {new Date().toLocaleTimeString()}. We are currently open
    </footer>
  );
}

//React version 18.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

//React before version 18
// React.render(<App />)
