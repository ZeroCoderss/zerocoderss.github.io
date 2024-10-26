import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoaderPage from "./components/loader";

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
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
