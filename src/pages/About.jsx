import { Typography, Box, Avatar, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Avatar
              sx={{ width: 200, height: 200, mb: 2 }}
              alt="Tu Nombre"
              src="/path-to-your-photo.jpg"
            />
            <Typography variant="h4" gutterBottom>
              Tu Nombre
            </Typography>
            <Typography variant="subtitle1" color="text.secondary">
              Desarrollador Web Full Stack
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Sobre Mí
            </Typography>
            <Typography paragraph>
              Soy un desarrollador web apasionado por crear soluciones digitales innovadoras.
              Con experiencia en el desarrollo tanto frontend como backend, me especializo en
              construir aplicaciones web modernas y eficientes.
            </Typography>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Habilidades
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} md={4}>
                <Typography>• React</Typography>
                <Typography>• Vue.js</Typography>
                <Typography>• JavaScript</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>• Node.js</Typography>
                <Typography>• Python</Typography>
                <Typography>• SQL</Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography>• Git</Typography>
                <Typography>• Docker</Typography>
                <Typography>• AWS</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default About; 