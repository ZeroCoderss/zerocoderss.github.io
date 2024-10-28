import { Button } from "@/components/ui/button";

import { ArrowLeft, Home, RefreshCcw } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center  ">
      <div className="w-full max-w-md">
        <div>
          <div className="text-6xl text-center">404</div>
          <div className="text-2xl font-bold text-center">Page Not Found</div>
        </div>
        <div className="text-center">
          <div className="mb-4">
            <svg
              className="w-20 h-20 mx-auto text-gray-400 dark:text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="outline" asChild>
            <Link to="/">
              <Home className="mr-2 h-4 w-4" />
              Home
            </Link>
          </Button>
          <Button variant="outline" onClick={() => window.history.back()}>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Go Back
          </Button>
          <Button variant="outline" onClick={() => window.location.reload()}>
            <RefreshCcw className="mr-2 h-4 w-4" />
            Reload
          </Button>
        </div>
      </div>
    </div>
  );
}
