import { Typography, Grid, Card, CardContent, CardMedia, CardActions, Button } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Proyecto 1',
    description: 'Descripción del proyecto 1. Tecnologías utilizadas: React, Node.js, MongoDB.',
    image: '/path-to-project1-image.jpg',
    github: 'https://github.com/yourusername/project1',
    demo: 'https://project1-demo.com'
  },
  {
    title: 'Proyecto 2',
    description: 'Descripción del proyecto 2. Tecnologías utilizadas: Vue.js, Express, PostgreSQL.',
    image: '/path-to-project2-image.jpg',
    github: 'https://github.com/yourusername/project2',
    demo: 'https://project2-demo.com'
  },
  {
    title: 'Proyecto 3',
    description: 'Descripción del proyecto 3. Tecnologías utilizadas: React Native, Firebase.',
    image: '/path-to-project3-image.jpg',
    github: 'https://github.com/yourusername/project3',
    demo: 'https://project3-demo.com'
  }
];

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Typography variant="h4" gutterBottom>
        Mis Proyectos
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.title}
                sx={{ objectFit: 'cover' }}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography>
                  {project.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" startIcon={<GitHubIcon />} href={project.github} target="_blank">
                  GitHub
                </Button>
                <Button size="small" startIcon={<LaunchIcon />} href={project.demo} target="_blank">
                  Demo
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
};

export default Projects; 