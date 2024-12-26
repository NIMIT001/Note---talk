import "./App.css";
import Footer from "./component/Footer/footer";
import Header from "./component/header/header";
import LandingPage from "./pages/Landing/LandingPage";
import MyNotes from "./pages/MyNotes/MyNotes";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes>
        <Route path="/" element={<LandingPage />} exact />
        <Route path="/mynotes" element={<MyNotes />} />
      </Routes>
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
