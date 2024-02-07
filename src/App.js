import "./App.css";
import Weather from "./Weather";
import Header from "./Header";
import Main from "./Main";
import Search from "./Search";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Main />
        <Weather city="Paris" />
        <Search />
        <Footer />
      </header>
    </div>
  );
}

export default App;
