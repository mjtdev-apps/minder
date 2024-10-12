import React from "react";
import { Box, Typography, Stack, Button, Tooltip } from "@mui/material";
import { useStore } from "../store";
import HabitTracker from "../HabitTracker";

interface TaskDisplayProps {
  currentIndex: number;
  onComplete: (item: any) => void;
  onSkip: () => void;
}

const TaskDisplay: React.FC<TaskDisplayProps> = ({
  currentIndex,
  onComplete,
  onSkip,
}) => {
  const { tasks, habits } = useStore();
  const items = [...tasks, ...habits];
  const currentItem = items[currentIndex];

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        {tasks.find((t) => t.id === currentItem.id) ? "Task" : "Habit"}
      </Typography>

      <Box mb={4}>
        <Typography variant="h6">{currentItem.text}</Typography>
        {"progress" in currentItem && <HabitTracker habitId={currentItem.id} />}
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Tooltip title="Complete this item">
          <Button
            variant="contained"
            color="success"
            onClick={() => onComplete(currentItem)}
          >
            Complete
          </Button>
        </Tooltip>
        <Tooltip title="Skip this item">
          <Button variant="outlined" color="secondary" onClick={onSkip}>
            Skip
          </Button>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default TaskDisplay;
