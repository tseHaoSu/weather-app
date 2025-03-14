import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface InputQuery {
  userName?: string;
  skinType?: string;
  location?: string;
  maxUV?: number;
  UVIndex?: number;
}

interface InputQueryStore {
  inputQuery: InputQuery;
  setName: (name: string) => void;
  setSkinType: (skinType: string) => void;
  setLocation: (location: string) => void;
  setMaxUV: (maxUV: number) => void;
  setUVIndex: (UVIndex: number) => void;
}

const useInputQueryStore = create<InputQueryStore>()(
  persist(
    (set) => ({
      inputQuery: {
        location: "Melbourne",
      },
      setName: (name: string) =>
        set((state) => ({
          inputQuery: { ...state.inputQuery, userName: name },
        })),
      setSkinType: (skinType: string) =>
        set((state) => ({
          inputQuery: { ...state.inputQuery, skinType: skinType },
        })),
      setLocation: (location: string) =>
        set((state) => ({
          inputQuery: { ...state.inputQuery, location: location },
        })),
      setMaxUV: (maxUV: number) =>
        set((state) => ({
          inputQuery: { ...state.inputQuery, maxUV: maxUV },
        })),
      setUVIndex: (UVIndex: number) =>
        set((state) => ({
          inputQuery: { ...state.inputQuery, UVIndex: UVIndex },
        })),
    }),
    {
      name: "input-query-storage", // unique name for the localStorage key
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useInputQueryStore;
