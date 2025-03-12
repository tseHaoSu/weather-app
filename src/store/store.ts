import { create } from "zustand";

interface InputQuery {
  userName?: string;
  skinType?: string;
  location?: string;
}

interface InputQueryStore {
  inputQuery: InputQuery;
  setName: (name: string) => void;
  setSkinType: (skinType: string) => void;
  setLocation: (location: string) => void;
}

const useInputQueryStore = create<InputQueryStore>((set) => ({
  inputQuery: {},
  setName: (name: string) =>
    set((state) => ({ inputQuery: { ...state.inputQuery, userName: name } })),
  setSkinType: (skinType: string) =>
    set((state) => ({
      inputQuery: { ...state.inputQuery, skinType: skinType },
    })),
  setLocation: (location: string) =>
    set((state) => ({
      inputQuery: { ...state.inputQuery, location: location },
    })),
}));

export default useInputQueryStore;
