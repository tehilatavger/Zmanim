import { Card, CardContent, Typography, Box } from '@mui/material';

const ZmanimCard = ({ label, time, icon: Icon, color }) => {
  const formattedTime = new Date(time).toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });

  return (
    <Card 
    elevation={0} 
    sx={{ 
        background: 'rgba(255, 255, 255, 0.7)', 
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.3)',
        transition: 'transform 0.2s',
        '&:hover': { transform: 'translateY(-5px)' }
    }}
    >
      <CardContent sx={{ textAlign: 'center' }}>
        <Box sx={{ color: color, mb: 1 }}>
          <Icon fontSize="large" />
        </Box>
        <Typography variant="overline" color="text.secondary" sx={{ fontWeight: 'bold' }}>
          {label}
        </Typography>
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          {formattedTime}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ZmanimCard;