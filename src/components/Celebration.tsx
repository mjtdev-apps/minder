import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useTheme } from "@mui/material/styles";
import HabitTracker from "../HabitTracker";

interface CelebrationProps {
  onNext: () => void;
  completedItem: any;
}

const Celebration: React.FC<CelebrationProps> = ({ onNext, completedItem }) => {
  const theme = useTheme();

  return (
    <Box textAlign="center" mt={4}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={{
          position: "relative",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: theme.palette.primary.main,
            textShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            mb: 2,
          }}
        >
          ✨ Well Done! ✨
        </Typography>

        {/* Show HabitTracker if the completed item is a habit */}
        {"progress" in completedItem && (
          <Box mt={2}>
            <HabitTracker habitId={completedItem.id} />
          </Box>
        )}
      </motion.div>

      <Button
        variant="contained"
        color="primary"
        onClick={onNext}
        sx={{ mt: 4 }}
      >
        Show Next Item
      </Button>
    </Box>
  );
};

export default Celebration;
