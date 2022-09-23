import React from "react"

const Header = () => {

  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5em",
  }
  
  return (
    <header style={headerStyle}>
      <h5 style={{ fontSize: "6rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "orangered", textAlign: "center" }}>Hey!</h5>
      <p style={{ fontSize: "3rem", fontWeight: "600", marginBottom: "2rem", lineHeight: "1em", color: "orangered", textAlign: "center" }}>Whats on the agenda?</p>
    </header>
  )
}

export default Header