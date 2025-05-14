import React from "react";

const Header = () => (
  <header style={{ display: "flex", alignItems: "center", padding: "1rem" }}>
    <img
      src="/logo.svg"
      alt="Guard Logo"
      style={{ width: 32, height: 32, marginRight: 8 }}
    />
    <h1 style={{ fontSize: "1.2rem", color: "#BFFF00", fontWeight: "bold" }}>
      GUARD
    </h1>
  </header>
);

export default Header;
