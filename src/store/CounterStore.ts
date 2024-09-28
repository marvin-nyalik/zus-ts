import { create } from "zustand";

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

const useCounterStore = create<CounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),
}));

interface Person {
  name: string;
  age: number;
}

interface People {
  people: Person[];
  addPerson: (person: Person) => void;
  renamePerson: (index: number, name: string) => void;
  resetPersonAge: (index: number, age: number) => void;
}

const usePersonStore = create<People>((set) => ({
  people: [],
  addPerson: (person) =>
    set((state) => ({ people: [...state.people, person] })),
  renamePerson: (index, name) =>
    set((state) => ({
      people: state.people.map((person, i) =>
        i === index ? { ...person, name: name } : person
      ),
    })),
  resetPersonAge: (index, age) =>
    set((state) => ({
      people: state.people.map((person, i) =>
        i === index ? { ...person, age: age } : person
      ),
    })),
}));

export {useCounterStore, usePersonStore};
