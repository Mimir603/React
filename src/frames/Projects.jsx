import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";

const projects = [
  { id: 1, title: "Проект 1", link: "#" },
  { id: 2, title: "Проект 2", link: "#" },
  { id: 3, title: "Проект 3", link: "#" },
  { id: 4, title: "Проект 4", link: "#" },
  { id: 5, title: "Проект 5", link: "#" },
  { id: 6, title: "Проект 6", link: "#" },
];

const Projects = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#00E5FF",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 4,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          textAlign: "left",
          width: "80%",
          mb: 2,
        }}
      >
        Portfolio
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4}>
            <Paper
              component="a"
              href={project.link}
              target="_blank"
              elevation={3}
              sx={{
                width: 180,
                height: 240,
                borderRadius: 2,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textDecoration: "none",
                color: "black",
                fontWeight: "bold",
                "&:hover": {
                  boxShadow: 6,
                },
              }}
            >
              {project.title}
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
