import { BrowserRouter, Route, Routes } from "react-router";
import { HomePage, InstructionPage, InstructionsListPage } from "../pages";
import { Footer, Header } from "../widgets";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/instructions" element={<InstructionsListPage />} />
          <Route path="/instruction/:id" element={<InstructionPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
