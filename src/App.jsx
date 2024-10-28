import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoaderPage from "./components/loader";
import ZcInvoicePage from "./pages/products/zc-invoice";

// Dynamically import components
const Home = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<LoaderPage />}>
          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<Home />} />
            <Route path="prodcut/zc-invoice" element={<ZcInvoicePage />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
