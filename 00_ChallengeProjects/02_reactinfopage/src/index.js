import React from "react"
import ReactDOM from "react-dom/client"
import "./styles.css"
import MainContent from "./MainContent.js"
import Header from "./Header.js"
import Footer from "./Footer.js"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>
)
