import React, { useState } from 'react';
import { Box, Button, TextField, Tooltip, Stack } from '@mui/material';
import { useStore } from '../store';

const AddHabitForm: React.FC = () => {
  const [habitName, setHabitName] = useState('');
  const [targetReps, setTargetReps] = useState<number | ''>('');
  const addHabit = useStore((state) => state.addHabit);

  const handleAddHabit = () => {
    if (habitName.trim() === '') {
      return; // Do nothing if the habit name is empty
    }

    addHabit(habitName, targetReps || 30); // Default target to 30 if not provided
    setHabitName('');
    setTargetReps('');
  };

  return (
    <Box mb={4}>
      <Stack direction="row" spacing={2} alignItems="center">
        <TextField
          label="New Habit"
          variant="outlined"
          value={habitName}
          onChange={(e) => setHabitName(e.target.value)}
          fullWidth
        />
        <TextField
          label="Target Reps"
          variant="outlined"
          type="number"
          value={targetReps}
          onChange={(e) => setTargetReps(Number(e.target.value))}
          sx={{ width: '120px' }}
        />
        <Tooltip title="Add this habit">
          <Button variant="contained" color="primary" onClick={handleAddHabit}>
            Add Habit
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default AddHabitForm;
