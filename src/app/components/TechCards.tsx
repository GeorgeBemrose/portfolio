import { FaPython, FaReact, FaGitAlt, FaLinux, FaDocker, FaJava } from 'react-icons/fa';
import { SiTypescript, SiApachekafka, SiPostgresql } from 'react-icons/si';
import { Typography, Box } from '@mui/material';

const techStack = [
  { name: 'TypeScript', icon: <SiTypescript />},
  { name: 'React', icon: <FaReact />},
  { name: 'Python', icon: <FaPython />},
  { name: 'Java', icon: <FaJava />},
  { name: 'Kafka', icon: <SiApachekafka />},
  { name: 'SQL', icon: <SiPostgresql />},
  { name: 'Git', icon: <FaGitAlt />},
  { name: 'Docker', icon: <FaDocker />},
  { name: 'Linux', icon: <FaLinux />}
  
];

export default function TechCards() {
  return (<>
  <Typography variant="h6" color="white">Tech Stack</Typography>
    <Box className="grid grid-cols-6 pt-2 px-2 shadow-md rounded-lg border">

      {techStack.map((tech) => (
        <Box
          key={tech.name}
          className="m-auto rounded-lg flex flex-col items-center pb-2"
        >

          <Box className="text-3xl text-white mb-1">
            {tech.icon}
          </Box>

          <Typography variant="caption" className="text-white text-center">
            {tech.name}
          </Typography>

        </Box>
      ))}

    </Box>
  </>

  );
}
