import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path={"/"} element={<Content />}></Route>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
