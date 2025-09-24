import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage } from "../pages/home";
import { Footer, Header } from "../widgets";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
