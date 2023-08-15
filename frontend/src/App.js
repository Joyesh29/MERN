import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" Component={LandingPage} exact />
        <Route path="/mynotes" Component={() => <MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
