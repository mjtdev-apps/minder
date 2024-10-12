import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useStore } from '../store';

const MaintenanceScreen: React.FC = () => {
  const { habits, addHabit, removeHabit } = useStore();

  const handleAddHabit = () => {
    const newHabitText = `New Habit ${habits.length + 1}`;
    const targetReps = 10; // Default value for target reps
    addHabit(newHabitText, targetReps);
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Maintenance Screen
      </Typography>

      <Box mt={4}>
        <Typography variant="h5">Manage Habits</Typography>
        <Box mt={2}>
          {habits.map((habit, index) => (
            <Box key={index} mb={1}>
              <Typography variant="body1">{habit.text}</Typography>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeHabit(habit.id)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Button variant="contained" color="primary" onClick={handleAddHabit}>
            Add Habit
          </Button>
        </Box>
      </Box>

      {/* Placeholder for future Application Settings */}
      <Box mt={4}>
        <Typography variant="h5">Application Settings (Coming Soon)</Typography>
      </Box>
    </Box>
  );
};

export default MaintenanceScreen;
