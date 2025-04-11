import { Typography, Box, Grid, TextField, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes agregar la lógica para manejar el envío del formulario
    // Por ejemplo, enviar a un servicio de email como FormSpree
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h4" gutterBottom>
              Contacto
            </Typography>
            <Typography paragraph>
              ¿Tienes alguna pregunta o propuesta? ¡No dudes en contactarme!
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Nombre"
                    name="name"
                    autoComplete="name"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email"
                    name="email"
                    autoComplete="email"
                    type="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Asunto"
                    name="subject"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Mensaje"
                    name="message"
                    multiline
                    rows={4}
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Enviar Mensaje
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h5" gutterBottom>
              Información de Contacto
            </Typography>
            <Box sx={{ mt: 3 }}>
              <Button
                startIcon={<EmailIcon />}
                href="mailto:tu@email.com"
                sx={{ mb: 2, display: 'block' }}
              >
                tu@email.com
              </Button>
              <Button
                startIcon={<LinkedInIcon />}
                href="https://linkedin.com/in/tuusuario"
                target="_blank"
                sx={{ mb: 2, display: 'block' }}
              >
                LinkedIn
              </Button>
              <Button
                startIcon={<GitHubIcon />}
                href="https://github.com/tuusuario"
                target="_blank"
                sx={{ mb: 2, display: 'block' }}
              >
                GitHub
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </motion.div>
  );
};

export default Contact; 