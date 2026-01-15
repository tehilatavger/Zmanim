import { Box, Typography } from '@mui/material';

const CurrentTimeClock = ({ currentTime }) => {
  return (
    <Box sx={{ 
      position: 'absolute', 
      top: 80, 
      right: 20, 
      textAlign: 'right',
      bgcolor: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: 2,
      px: 2,
      py: 1,
      boxShadow: 1
    }}>
      <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.75rem' }}>
        Current Time
      </Typography>
      <Typography variant="h6" color="primary.main" sx={{ fontWeight: 600 }}>
        {currentTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
      </Typography>
    </Box>
  );
};

export default CurrentTimeClock;
