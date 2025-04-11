import { Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h2" component="h1" gutterBottom>
          ¡Bienvenido a Mi Portfolio!
        </Typography>
        <Typography variant="h5" color="text.secondary" paragraph>
          Desarrollador Web Full Stack
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Frontend
            </Typography>
            <Typography>
              React, Vue, Angular
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Backend
            </Typography>
            <Typography>
              Node.js, Python, Java
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            sx={{
              p: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography variant="h6" gutterBottom>
              Bases de Datos
            </Typography>
            <Typography>
              MongoDB, PostgreSQL, MySQL
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Home; 