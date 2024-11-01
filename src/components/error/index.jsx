import { clearCookies } from "@/lib/cookies";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";
import { error } from "@/config/data/home-page";

const CookieErrorComp = () => {
  const navigate = useNavigate();

  const handleCookiesClean = () => {
    clearCookies();
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen relative">
      <div className="text-center">
        {/* Cookie error title */}
        <h1 className="text-7xl font-bold text-red-700">Cookie Error</h1>

        {/* Main error message */}
        <h2 className="mt-4 text-3xl font-semibold text-gray-800">
          We’ve detected a problem with your browser cookies!
        </h2>

        {/* Description */}
        <div className="flex items-center justify-center">
          <p className="mt-2 text-lg text-gray-600 w-[70%]">
            {error.p}
          </p>
        </div>

        {/* Button to guide user */}
        <Button
          className="mt-8"
          size="lg"
          variant="default"
          onClick={handleCookiesClean}
        >
          Clean Now
        </Button>

        {/* Button to trigger a popup message */}
      </div>
    </div>
  );
};

export default CookieErrorComp;
