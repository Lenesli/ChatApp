import { create } from "zustand";

export const useThemeStore = create((set) =>({
    // checks if "chat-theme" is saved in localStorage 
    theme : localStorage.getItem("chat-theme") || "dark", 
    setTheme: (theme ) =>{
        localStorage.setItem("chat-theme",theme ),
        set({theme});
    }

})); 