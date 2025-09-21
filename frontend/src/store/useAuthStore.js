// ✅ frontend/src/store/useAuthStore.js
import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import toast from "react-hot-toast";
import { io } from "socket.io-client";

const SOCKET_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:5001"
    : "https://chatapp-backend-x0w0.onrender.com";

export const useAuthStore = create((set, get) => ({
  // ... other state

  connectSocket: () => {
    const { authUser } = get();
    if (!authUser || get().socket?.connected) return;

    const socket = io(SOCKET_URL, {        // ✅ FIXED HERE
      query: { userId: authUser._id },
      withCredentials: true,
    });

    socket.connect();
    set({ socket });

    socket.on("getOnlineUsers", (userIds) => {
      set({ onlineUsers: userIds });
    });
  },

  // ... rest of your code
}));
