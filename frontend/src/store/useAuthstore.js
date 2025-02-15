import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import { toast } from "react-toastify";

export const useAuthStore = create((set) => ({
  authUser: null,
  isSigningUp: false,
  isLoggingIn: false,
  isUpdatingProfile: false,
  isCheckingAuth: true,

  checkAuth: async () => {
    try {
      const res = await axiosInstance.get("/auth/check");
      set({ authUser: res.data });
    } catch (error) {
      console.log("Error in checkAuth:", error);
      set({ authUser: null });
    } finally {
      set({ isCheckingAuth: false });
    }
  },

  signup: async (data) => {
    set({ isSigningUp: true });
    try {
      const res = await axiosInstance.post("/auth/signup", data);
      if (res.status === 201) {
        set({ authUser: res.data });
        toast.success("Account created successfully");
      } else {
        toast.error("Signup failed, please try again.");
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during signup";
      toast.error(errorMessage);
    } finally {
      set({ isSigningUp: false });
    }
  },

  login: async ({ email, password }) => {
    set({ isLoggingIn: true });
    try {
      const res = await axiosInstance.post("/auth/login", { email, password });
      if (res.status === 200) {
        // Store the token in localStorage
        localStorage.setItem("token", res.data.token);
        set({ authUser: res.data });
        toast.success("Login successful");
        return true; // Indicate successful login
      } else {
        toast.error("Login failed, please try again.");
        return false;
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An error occurred during login";
      toast.error(errorMessage);
      return false; // Indicate failure
    } finally {
      set({ isLoggingIn: false });
    }
  },

  logout: async () => {
    try {
      await axiosInstance.post("/auth/logout");
      set({ authUser: null });
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  },
}));