import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TableComponent } from "./components/ui/Table/Table";
import { HomeScreen, PokemonScreen, TodosPage } from "./pages";

function App() {
  const [count, setCount] = useState(0);
  const data=[
    {
      name:'producto 1',
      stock:10,
      price:12,
    },
    {
      name:'producto 2',
      stock:50,
      price:2,
    },
    {
      name:'producto 3',
      stock:9,
      price:5,
    },
    {
      name:'producto 4',
      stock:9,
      price:5,
    },
    {
      name:'producto 5',
      stock:9,
      price:5,
    },
    {
      name:'producto 6',
      stock:9,
      price:6,
    },
  ]
  const thead=[
    {
      name:'producto',
    },
    {
      name:'stock',
    },
    {
      name:'precio',
    },
  ]

  return (
    <div className="app">
      {/* <HomeScreen/> */}
      {/* <PokemonScreen/> */}
      <TodosPage/>
    </div>
  );
}

export default App;
