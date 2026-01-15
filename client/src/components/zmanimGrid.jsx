import { Grid, Button, Box } from '@mui/material';
import { NightlightRound, WbTwilight, WbSunny, AccessTime, WbCloudy, Restaurant, Brightness3 } from '@mui/icons-material';
import { useState } from 'react';
import ZmanimCard from './ZmanimCard';

const ZMANIM_CONFIG = [
  { key: 'dawn', label: 'Dawn', icon: NightlightRound, color: '#3f51b5', main: true },
  { key: 'sunrise', label: 'Sunrise', icon: WbTwilight, color: '#ff9800', main: true },
  { key: 'shema', label: 'Shema', icon: WbSunny, color: '#fbc02d', main: true },
  { key: 'midday', label: 'Midday', icon: WbCloudy, color: '#00bcd4', main: false },
  { key: 'mincha', label: 'Mincha', icon: Restaurant, color: '#9c27b0', main: false },
  { key: 'sunset', label: 'Sunset', icon: AccessTime, color: '#e91e63', main: true },
  { key: 'nightfall', label: 'Nightfall', icon: Brightness3, color: '#1a237e', main: false },
];

const ZmanimGrid = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  
  const displayedZmanim = showAll 
    ? ZMANIM_CONFIG 
    : ZMANIM_CONFIG.filter(z => z.main);

  return (
    <>
      <Grid container spacing={3} sx={{ display: 'flex', justifyContent: 'center', maxWidth: '900px', margin: '0 auto' }}>
        {displayedZmanim.map(({ key, label, icon, color }) => (
          data[key] && (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={key}>
              <ZmanimCard label={label} time={data[key]} icon={icon} color={color} />
            </Grid>
          )
        ))}
      </Grid>
      
      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Button 
          size="small" 
          onClick={() => setShowAll(!showAll)}
          sx={{ textTransform: 'none' }}
        >
          {showAll ? 'Show Less' : 'Show More Times'}
        </Button>
      </Box>
    </>
  );
};

export default ZmanimGrid;