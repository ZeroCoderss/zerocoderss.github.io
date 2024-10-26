import { Button } from "@/components/ui/button";

const PageNotFound = ({ isDashBoard = false }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="text-center">
        {/* Animated 404 text */}
        <h1 className="text-9xl font-bold text-red-500 animate-bounce">404</h1>

        {/* Main error message */}
        <h2 className="mt-4 text-4xl font-semibold text-gray-700">
          Oops! Page Not Found
        </h2>

        {/* Description */}
        <p className="mt-2 text-lg text-gray-600">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        {/* Button from Shadcn with hover effects */}
        <Button className="mt-8" size="lg" variant="default" asChild>
          {isDashBoard ? (
            <a href="/dashboard">Go Back Home</a>
          ) : (
            <a href="/">Go Back Home</a>
          )}
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
