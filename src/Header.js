import React from "react";
import "./styles.css";

export default function Header() {
  return (
    <div className="Header">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <div class="weather-app">
        <header id="time">Wednesday February 7, 2024 1:16PM</header>
      </div>
    </div>
  );
}
