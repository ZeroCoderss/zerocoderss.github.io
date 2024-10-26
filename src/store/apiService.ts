import { BACKEND_URL } from "@/config/app-config";

export const fetchUserData = async (token: string) => {
  try {
    const response = await fetch(`${BACKEND_URL}/get_profile`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message || "Failed to fetch user data");
  }
};
