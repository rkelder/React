import React from "react"

export default function Meme() {
  return (
    <main>
      <form className="form">
        <input type="text" placeholder="Top text" className="formInput"></input>
        <input className="formInput"></input>
        <button type="text" placeholder="Bottom text" className="formButton">
          Get a new meme image
        </button>
      </form>
    </main>
  )
}
