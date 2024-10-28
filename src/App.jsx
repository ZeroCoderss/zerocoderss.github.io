import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoaderPage from "./components/loader";
import ZcInvoicePage from "./pages/products/zc-invoice";
import PageNotFound from "./pages/page-not-found";
import ContactPage from "./pages/contact";
import HeaderLayout from "./components/app/layout";

// Dynamically import components
const Home = React.lazy(() => import("./pages/home"));

function App() {
  return (
    <Router>
      <div>
        <Suspense fallback={<LoaderPage />}>
          <Routes>
            {/* Define your routes */}
            <Route path="/" element={<HeaderLayout />}>
              <Route index element={<Home />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="prodcut/zc-invoice" element={<ZcInvoicePage />} />
            </Route>

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
