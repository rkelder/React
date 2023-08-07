import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

const cards = data.map((item) => {
  return (
    <Card
      key={item.id}
      img={item.coverImg}
      alt=""
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      country={item.location}
      title={item.location}
      price={item.price}
      openSpots={item.openSpots}
    />
  )
})

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <section className="cards-list">{cards}</section>
  </React.StrictMode>
)
