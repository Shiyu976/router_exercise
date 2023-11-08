import { create } from "zustand";

const useStore = create((set) => ({
    name: '',
    age: '',
    sex: '',

    setName: (name) => set({ name }),
    setAge: (age) => set({ age }),
    setSex: (sex) => set({ sex }),
}));

export default useStore;