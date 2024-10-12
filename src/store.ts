import { create } from 'zustand';

interface Task {
  id: number;
  text: string;
  completed: boolean;
}

interface Habit {
  id: number;
  text: string;
  progress: number; // Track progress over time
  targetReps: number; // Number of repetitions needed to complete the habit
}

interface StoreState {
  tasks: Task[];
  habits: Habit[];
  completeTask: (id: number) => void;
  skipTask: (id: number) => void;
  completeHabit: (id: number) => void;
  skipHabit: (id: number) => void;
  addHabit: (text: string, targetReps: number) => void;
  editHabit: (id: number, newText: string, newTargetReps: number) => void;
  removeHabit: (id: number) => void;
}

export const useStore = create<StoreState>((set) => ({
  tasks: [
    { id: 1, text: 'Get a haircut at 2:00 PM', completed: false },
    { id: 2, text: 'Submit project update', completed: false },
  ],
  habits: [
    { id: 1, text: 'Walk 10 minutes', progress: 0, targetReps: 30 },
    { id: 2, text: 'Meditate for 5 minutes', progress: 0, targetReps: 30 },
  ],
  completeTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === id ? { ...task, completed: true } : task
      ),
    })),
  skipTask: (id) => {},
  completeHabit: (id) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id ? { ...habit, progress: habit.progress + 1 } : habit
      ),
    })),
  skipHabit: (id) => {},
  addHabit: (text, targetReps) =>
    set((state) => ({
      habits: [
        ...state.habits,
        {
          id: state.habits.length + 1, // Use length to assign a unique ID (for simplicity)
          text,
          progress: 0,
          targetReps,
        },
      ],
    })),
  editHabit: (id, newText, newTargetReps) =>
    set((state) => ({
      habits: state.habits.map((habit) =>
        habit.id === id ? { ...habit, text: newText, targetReps: newTargetReps } : habit
      ),
    })),
  removeHabit: (id) =>
    set((state) => ({
      habits: state.habits.filter((habit) => habit.id !== id),
    })),
}));
