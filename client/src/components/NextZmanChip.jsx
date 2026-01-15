import { Box, Typography, Chip } from '@mui/material';
import { Timer } from '@mui/icons-material';

const NextZmanChip = ({ nextZman }) => {
  if (!nextZman) return null;

  return (
    <Box sx={{ mt: 4, display: 'flex', justifyContent: 'center' }}>
      <Chip 
        icon={<Timer />}
        label={`Next Up: ${nextZman.label} at ${nextZman.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`}
        color="primary"
        variant="outlined"
        sx={{ py: 2.5, px: 1, fontWeight: 'bold' }}
      />
    </Box>
  );
};

export default NextZmanChip;
