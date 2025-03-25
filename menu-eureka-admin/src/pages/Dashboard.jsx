import { useState, useEffect } from 'react';
import { Box, Grid, Paper, Typography } from '@mui/material';
import { categoryService, itemService } from '../services/api';

export default function Dashboard() {
  const [stats, setStats] = useState({
    categories: 0,
    items: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [categoriesResponse, itemsResponse] = await Promise.all([
          categoryService.getAll(),
          itemService.getAll(),
        ]);
        
        setStats({
          categories: categoriesResponse.data.length,
          items: itemsResponse.data.length,
        });
      } catch (error) {
        console.error('Error al cargar estadísticas:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Categorías
            </Typography>
            <Typography variant="h3">{stats.categories}</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper
            sx={{
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Ítems del Menú
            </Typography>
            <Typography variant="h3">{stats.items}</Typography>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 