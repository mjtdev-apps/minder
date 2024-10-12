# Personal Reminder System - Summary and Current State

## Vision Overview
The Personal Reminder System is a web-based application designed to gently nudge users towards habits and tasks without distracting them from deep work. The app is user-driven, meaning users actively open it when they want to check on reminders, avoiding push notifications or intrusive nudges. It features a "Zen Mode" where only one item (habit or task) is shown at a time, fostering focus and preventing cognitive overload. The app also incorporates an AI-driven system for categorizing and prioritizing reminders.

## Current State of the Project
### Core Components
- **Zen Mode Dashboard (ZenModeDashboard.tsx)**: Displays a single reminder at a time for the user to either complete or skip. On completion, a celebration screen appears, with a subtle animation and a visual tracker for habits. Users can move to the next item manually, maintaining full control over the flow.
- **Maintenance Screen (MaintenanceScreen.tsx)**: Handles the management of habits, tasks, and future application settings. This screen is intended to keep habit/task management separate from the daily reminder experience, reducing cognitive burden for the user. The habit management includes options to add, edit, or delete habits.
- **Navigation (Navigation.tsx)**: Provides simple navigation between the Zen Mode and Maintenance Screen. Ensures users can switch between focused reminders and habit/task management seamlessly.
- **App (App.tsx)**: The main entry point that incorporates the navigation and renders either the Zen Mode or Maintenance Screen based on user selection. This component also includes the header for consistent branding.
- **Header (Header.tsx)**: A simple header component that displays the app's title.
- **TaskDisplay (TaskDisplay.tsx)**: Manages the display of the current task or habit, including actions to complete or skip the item.
- **Celebration (Celebration.tsx)**: Manages the celebratory animation and "Well Done" message when a task or habit is completed. Also shows the habit jar tracker to visualize progress on habits.

### State Management
- **Zustand Store (store.js)**: The application uses Zustand for state management. The store maintains reminders, habits, and the current reminder index. Core actions include adding/removing habits and completing reminders.
  - **Habits**: Have an implicit 1-up ID (no need for UUID). The `addHabit` function requires a `targetReps` number for habit tracking. The system currently uses a default value for `targetReps`.

### User Preferences and Key Decisions
1. **User Control and Flow**:
   - The user is always in control of when to engage with the app. There are no intrusive notifications or nudges.
   - Reminders are displayed one at a time, and the user can decide when to move to the next item.
2. **Maintenance Screen**:
   - A dedicated **Maintenance Screen** was created to manage habits and tasks. This keeps management activities separate from the focused reminder experience, minimizing distractions and cognitive load.
3. **Habit ID Generation**:
   - Instead of using `crypto.randomUUID()`, habits have an implicit 1-up ID based on their order in the list.
   - The `addHabit` function requires a `targetReps` number, and this is currently set to a default value (e.g., `10`).
4. **Celebration and Feedback**:
   - The **Celebration** component includes a subtle animation to celebrate task completion, as well as the habit jar visualization for habits.
   - The snackbar feedback for actions like completing/skipping tasks was removed, as it was considered distracting, with on-screen changes providing sufficient feedback.
5. **Separation of Concerns**:
   - The application has been refactored to decompose larger components like `App.tsx` into smaller, reusable components for better maintainability and a cleaner codebase.
6. **No UUID for Habits**:
   - The use of UUIDs for habits was found to be unnecessary, as habits follow a 1-up ID structure implicitly. This simplifies the management of habits.

## Next Steps
1. **Polish the Zen Mode Experience**:
   - Ensure the **Zen Mode Dashboard** flows smoothly with no overlapping elements or jarring transitions.
   - Fine-tune the celebration animation and ensure the habit jar fills correctly, providing clear visual feedback.
2. **Expand Maintenance Screen Features**:
   - Allow users to customize `targetReps` when adding new habits.
   - Begin adding settings options, such as preferences related to AI-driven features.
3. **Testing and Feedback**:
   - Test all user flows thoroughly, including adding/removing habits, completing tasks, and navigating between screens.
   - Gather feedback on the user experience, especially in terms of maintaining focus and minimizing distractions.

## Summary of Codebase Structure
- **App.tsx**: Main entry point, handles navigation between screens.
- **Navigation.tsx**: Navigation bar for switching between Zen Mode and Maintenance.
- **ZenModeDashboard.tsx**: Handles displaying a single task/habit, with completion and skipping logic.
- **MaintenanceScreen.tsx**: Manages adding/removing habits and contains a placeholder for application settings.
- **Header.tsx**: Displays the app title.
- **TaskDisplay.tsx**: Handles displaying the current item (task/habit) with action buttons.
- **Celebration.tsx**: Manages celebration animations and visual feedback for completed habits.
- **store.js**: Zustand store managing state for tasks, habits, and actions.

This summary captures the current state of the project and the key decisions we've made to ensure the app aligns with the vision of providing a distraction-free, user-controlled reminder experience. Feel free to use this document to pick up where we left off whenever you're ready to continue.

