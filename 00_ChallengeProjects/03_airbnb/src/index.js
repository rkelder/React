import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

const cards = data.map((item) => {
  return <Card key={item.id} item={item} />
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <section className="cards-list">{cards}</section>
  </React.StrictMode>
)
