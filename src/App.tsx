import Body from "./components/commonStructure/body/Body";
import Footer from "./components/commonStructure/footer/Footer";
import Header from "./components/commonStructure/header/Header";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="div-main">
      <Header />
      <Body />
      <Footer />
      <ToastContainer position="top-right" />
    </div>
  );
}

export default App;
