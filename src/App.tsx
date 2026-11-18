import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";

function App() {
  return (
    <div className="page__content">
      <Header />
      <Main />

      <footer className="footer page__section">
        <p className="footer__copyright">
          @ 2025 Around The U.S.
        </p>
      </footer>
    </div>
  );
}

export default App;