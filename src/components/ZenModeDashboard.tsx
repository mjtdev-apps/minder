import React, { useState } from "react";
import { Box, Paper, Typography } from "@mui/material";
import { useStore } from "../store";
import TaskDisplay from "./TaskDisplay";
import Celebration from "./Celebration";

const ZenModeDashboard: React.FC = () => {
  const { tasks, habits, completeTask, completeHabit } = useStore();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCelebration, setShowCelebration] = useState(false);
  const [completedItem, setCompletedItem] = useState<any | null>(null);

  const items = [...tasks, ...habits];

  const handleNext = () => {
    setShowCelebration(false);
    setCompletedItem(null);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const handleSkip = () => {
    handleNext(); // Immediately move to the next item when skipping
  };

  const handleComplete = (item: any) => {
    if ("completed" in item) {
      completeTask(item.id);
    } else {
      completeHabit(item.id);
    }
    setCompletedItem(item);
    setShowCelebration(true);
  };

  return (
    <Box mb={4} mt={4}>
      {items.length > 0 && (
        <Paper elevation={3} sx={{ padding: 4, position: "relative" }}>
          {!showCelebration ? (
            <TaskDisplay
              currentIndex={currentIndex}
              onComplete={handleComplete}
              onSkip={handleSkip}
            />
          ) : (
            <Celebration onNext={handleNext} completedItem={completedItem} />
          )}
        </Paper>
      )}

      {items.length === 0 && (
        <Typography variant="h6" align="center" mt={4}>
          No tasks or habits available. Add something to get started!
        </Typography>
      )}
    </Box>
  );
};

export default ZenModeDashboard;
