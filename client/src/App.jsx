import React, { useEffect, useState } from 'react';
import { 
  Container, Typography, Button, Box, Grid, Skeleton, 
  Alert, AppBar, Toolbar 
} from '@mui/material';
import { MyLocation } from '@mui/icons-material';
import ZmanimGrid from './components/zmanimGrid';
import NextZmanChip from './components/NextZmanChip';
import CurrentTimeClock from './components/CurrentTimeClock';
import DateNavigator from './components/DateNavigator';
import { useGeolocation } from './hooks/useGeolocation';
import { useZmanim } from './hooks/useZmanim';
import { useNextZman } from './hooks/useNextZman';
import { UPDATE_INTERVAL } from './constants';

function App() {
  const { getLocation, loading: locationLoading, error: locationError } = useGeolocation();
  const { data, loading: zmanimLoading, error: zmanimError, getZmanim } = useZmanim();
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [userCoords, setUserCoords] = useState(null);

  const loading = locationLoading || zmanimLoading;
  const error = locationError || zmanimError;
  const nextZman = useNextZman(data, currentTime);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), UPDATE_INTERVAL);
    return () => clearInterval(timer);
  }, []);

  const fetchZmanimForDate = async (coords, date) => {
    await getZmanim(coords.latitude, coords.longitude, date);
  };

  const handleFetch = async () => {
    try {
      const coords = await getLocation();
      setUserCoords(coords);
      await fetchZmanimForDate(coords, selectedDate);
    } catch (err) {
      return;
    }
  };

  const handleDateChange = (newDate) => {
    setSelectedDate(newDate);
    if (userCoords) {
      fetchZmanimForDate(userCoords, newDate);
    }
  };

  return (
    <Box 
      sx={{ 
        minHeight: '100vh', 
        display: 'flex', 
        flexDirection: 'column',
        bgcolor: 'background.default', 
        justifyContent: 'center',
        position: 'relative'
      }}
    >
      {data && <CurrentTimeClock currentTime={currentTime} />}
      
      <AppBar position="absolute" elevation={0} sx={{ bgcolor: 'transparent', color: 'primary.main' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>Zmanim Explorer</Typography>
        </Toolbar>
      </AppBar>

      <Container 
        maxWidth="md" 
        sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          alignItems: 'center',
          py: 4
        }}
      >
        <Box sx={{ textAlign: 'center', width: '100%' }}>
          <Typography variant="h3" color="primary" gutterBottom sx={{ fontSize: { xs: '2rem', md: '3rem' } }}>
            Halachic Daily Times
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            Get precise Zmanim for your current location.
          </Typography>

          <Button 
            variant="contained" 
            size="large" 
            startIcon={<MyLocation />}
            onClick={handleFetch}
            disabled={loading}
            sx={{ px: 4, py: 1.5, borderRadius: 10 }}
          >
            {loading ? 'Loading...' : 'Use My Location'}
          </Button>

          {error && <Alert severity="error" sx={{ mt: 4, borderRadius: 2, width: '100%' }}>{error}</Alert>}

          {data && <DateNavigator selectedDate={selectedDate} onDateChange={handleDateChange} />}

          <NextZmanChip nextZman={nextZman} />

          <Box sx={{ mt: 6, width: '100%' }}>
            {loading ? (
              <Grid container spacing={3}>
                {[1, 2, 3, 4].map((i) => (
                  <Grid size={{ xs: 12, sm: 6, md: 3 }} key={i}>
                    <Skeleton variant="rectangular" height={120} sx={{ borderRadius: 3 }} />
                  </Grid>
                ))}
              </Grid>
            ) : (
              data && <ZmanimGrid data={data} />
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default App;