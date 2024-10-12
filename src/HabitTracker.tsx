import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { useStore } from './store';

interface HabitTrackerProps {
  habitId: number;
}

const HabitTracker: React.FC<HabitTrackerProps> = ({ habitId }) => {
  const { habits } = useStore();
  const habit = habits.find((h) => h.id === habitId);

  if (!habit) return null;

  // Calculate fill level based on habit progress relative to targetReps
  const fillLevel = Math.min(habit.progress / habit.targetReps, 1); // Max fill level is 1 (100%)

  return (
    <Box textAlign="center" mt={2}>
      <Typography variant="h6">{habit.text}</Typography>
      <Box
        position="relative"
        width="100px"
        height="200px"
        margin="0 auto"
        sx={{ filter: fillLevel === 1 ? 'drop-shadow(0 0 10px #ffeb3b)' : 'none' }}
      >
        {/* Jar Outline */}
        <svg viewBox="0 0 100 200" width="100%" height="100%">
          <path
            d="M10 10 h80 v180 h-80 z"
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        </svg>
        {/* Jar Fill */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: 10,
            left: 10,
            width: '80%',
            backgroundColor: '#90caf9',
            height: `${fillLevel * 100}%`, // Control the height with habit progress
            originY: 1,
            borderRadius: '4px',
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: fillLevel }}
          transition={{ duration: 0.5 }}
        />
        {/* Celebration Effect */}
        {fillLevel === 1 && (
          <motion.div
            style={{
              position: 'absolute',
              top: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              color: '#ffeb3b',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            🎉
          </motion.div>
        )}
      </Box>
    </Box>
  );
};

export default HabitTracker;
