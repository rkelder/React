import React from "react"

function Header() {
  return (
    <nav>
      <img
        src={process.env.PUBLIC_URL + "/logo512.png"}
        alt=""
        className="nav--icon"
      />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  )
}

export default Header
