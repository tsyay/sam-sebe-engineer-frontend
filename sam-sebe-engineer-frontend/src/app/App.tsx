import { BrowserRouter, Route, Routes } from "react-router";
import {
  AddInstructionPage,
  HomePage,
  InstructionPage,
  InstructionsListPage,
  ElectronicComponentPage
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
          <Route path="/instructions/:id" element={<InstructionPage />} />
          <Route path="/instructions/add" element={<AddInstructionPage />} />
          <Route path="/components/:id" element={<ElectronicComponentPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
