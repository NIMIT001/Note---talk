import "./App.css";
import Footer from "./component/Footer/footer";
import Header from "./component/header/header";
import LandingPage from "./pages/Landing/LandingPage";

const App = () => (
  <>
    <Header />
    <main style={{ minHeight: "93vh" }}>
      <LandingPage/>
    </main>
    <Footer />
  </>
);

export default App;
