import { BrowserRouter, Route, Routes } from "react-router";
import {
  AddInstructionPage,
  HomePage,
  InstructionPage,
  InstructionsListPage,
} from "../pages";
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
          <Route path="/instruction/add" element={<AddInstructionPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
