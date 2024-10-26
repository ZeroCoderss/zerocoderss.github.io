import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { ThemeProvider } from "@/components/setting/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import LoaderPage from "./components/loader";

// Dynamically import components
const Home = React.lazy(() => import("./pages/home.tsx"));

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <Router>
        <div>
          <Toaster />
          <Suspense fallback={<LoaderPage />}>
            <Routes>
              {/* Define your routes */}
              <Route path="/" element={<Home />} />
            </Routes>
          </Suspense>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
