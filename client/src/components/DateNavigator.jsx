import { Box, IconButton, Typography } from '@mui/material';
import { ChevronLeft, ChevronRight } from '@mui/icons-material';

const DateNavigator = ({ selectedDate, onDateChange }) => {
  const handlePrevDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    onDateChange(newDate);
  };

  const handleNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    onDateChange(newDate);
  };

  const isToday = selectedDate.toDateString() === new Date().toDateString();

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2, mb: 3 }}>
      <IconButton onClick={handlePrevDay} size="small">
        <ChevronLeft />
      </IconButton>
      
      <Box sx={{ textAlign: 'center', minWidth: '200px' }}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          {selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
          })}
        </Typography>
        {isToday && (
          <Typography variant="caption" color="primary" sx={{ fontWeight: 'bold' }}>
            Today
          </Typography>
        )}
      </Box>
      
      <IconButton onClick={handleNextDay} size="small">
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default DateNavigator;
