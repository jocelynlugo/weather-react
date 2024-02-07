import "./styles.css";

export default function Footer() {
  return (
    <div className="Footer">
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossorigin="anonymous"
      />
      <div class="weather-app">
        <footer>
          This project was coded by
          <a
            href="https://github.com/jocelynlugo"
            target="_blank"
            rel="noreferrer"
          >
            Jocelyn Lugo
          </a>
          , is
          <a
            href="https://github.com/jocelynlugo/weather-react"
            target="_blank"
            rel="noreferrer"
          >
            opened-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
