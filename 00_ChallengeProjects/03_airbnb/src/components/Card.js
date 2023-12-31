import React from "react"

export default function Card(props) {
  let badgeText
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location === "Online") {
    badgeText = "ONLINE"
  }

  return (
    <div className="card">
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        src={`../assets/${props.item.coverImg}`}
        className="card--image"
        alt=""
      />
      <div className="card--stats">
        <img src="assets/star.png" alt="A star icon" className="card--star" />
        <span>{props.item.stats.rating}</span>
        <span className="gray card--margin">
          ({props.item.stats.reviewCount}) •
        </span>
        <span className="gray card--margin">{props.item.location}</span>
      </div>
      <p className="card--title">{props.item.title}</p>
      <p className="card--price">
        <span className="bold">From ${props.item.price}</span> / person
      </p>
    </div>
  )
}
