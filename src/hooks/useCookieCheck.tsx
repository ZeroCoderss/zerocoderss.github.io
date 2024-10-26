import { getCookie } from "@/lib/cookies";
import { useMemo } from "react";

function useCookieCheck(cookieName: string): string | null {
  // Memoized value to avoid rechecking on every render
  return useMemo(() => {
    const cookieValue = getCookie(cookieName);
    return cookieValue;
  }, [cookieName]);
}

export default useCookieCheck;
