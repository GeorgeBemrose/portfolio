import React from 'react';
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardMedia, Typography, Box } from '@mui/material';

// Define the type for each project
interface Project {
  title: string;
  description: string;
  techStack: string[];
  imageUrl: string;
  link: string;
}

interface ProjectShowcaseProps {
  projects: Project[];
}

// External function to handle link clicks
const handleLinkClick = (link: string, router: ReturnType<typeof useRouter>) => {
  if (link.startsWith('/')) {
    router.push(link);
  } else {
    window.open(link, '_blank', 'noopener noreferrer');
  }
};

const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({ projects }) => {
  const router = useRouter();

  return (
    <Box className="md:w-1/2 pt-5">
      <Typography variant="h6" color="white" className="pb-2">
        Personal Projects
      </Typography>
      {projects.map((project, index) => (
        <Card className="mb-10" key={index}>
          <CardMedia
            component="img"
            className="pr-2 object-cover"
            image={project.imageUrl}
          />

          <CardContent>
            <Typography
              variant="h5"
              component="button" // Always use a button
              onClick={() => handleLinkClick(project.link, router)} // Call the external function
              color="secondary"
              className="hover:text-primary mb-2 cursor-pointer" // Add cursor style
            >
              {project.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" className="mb-2">
              Tech Stack: {project.techStack.join(', ')}
            </Typography>
            <Typography variant="body2" color="textSecondary" gutterBottom className="mb-2">
              {project.description}
            </Typography>
            {project.imageUrl && (
              <Typography
                variant="body2"
                component="button" // Always use a button
                onClick={() => handleLinkClick(project.link, router)} // Call the external function
                color="textSecondary"
                gutterBottom
                className='cursor-pointer'
              >
                Click here or the {project.title} title to access the live demo.
              </Typography>
            )}
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProjectShowcase;