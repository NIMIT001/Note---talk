import "./App.css";
import Footer from "./component/Footer/footer";
import Header from "./component/header/header";
import LandingPage from "./pages/Landing/LandingPage";
import { BrowserRouter, Routes } from "react-router-dom";
import MyNotes from "./pages/MyNotes/MyNotes";
const App = () => (
  <BrowserRouter>
    <Header />
    <main>
      <Routes path="/" component={() => <LandingPage />} exact />
      <Routes path="/mynotes" component={() => <MyNotes />} />
    </main>
    <Footer />
  </BrowserRouter>
);

export default App;
