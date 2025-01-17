'use client'

import Image from "next/image";
import { Box, Typography, Container } from '@mui/material';
import TechCards from "./components/TechCards";
import PlaceIcon from '@mui/icons-material/Place';
import ContactBar from "./components/ContactBar";
import ExpProjTab from "./components/ExpProjTab";

import ProjectsList from './components/ProjectShowcase';

import projectsData from './data/projects.json'

export default function Home() {
  return (<>

    <Container
      maxWidth={false}
      className="bg-primary min-h-screen overflow-x-hidden max-w-full"
    >
      <Container
        maxWidth="lg" className="pt-4">

        <Box className="md:flex p-4">
          <Box className="flex flex-col md:w-1/2">

            <Box className="flex flex-row pb-4">
              <Box>
                <Typography variant="h3" color="white" className="text-2xl sm:text-3xl md:text-5xl">George Bemrose</Typography>
                <Typography variant="h5" color="white"className="text-1xl sm:text-2xl md:text-3xl">Full Stack Developer</Typography>
                <Box className="flex items-center">
                  <PlaceIcon sx={{ color: 'white' }} />
                  <Typography variant="h6" color="white">London, UK</Typography>
                </Box>
              </Box>
              <Image src="/Headshot.png" alt='Headshot'
                width={150}
                height={150}

                className="rounded-lg p-2 m-auto md:hidden self-start object-cover"
                priority

              />
            </Box>

            <Box>
              <ContactBar />
              <TechCards />
            </Box>
          </Box>
<Box className="m-auto hidden  md:flex">
          <Image src="/Headshot.png" alt='Headshot'
            width={350}
            height={350}

            className="rounded-lg m-auto hidden md:flex"
            priority

          />
</Box>
        </Box>
        <Box className="md:flex">
          <ExpProjTab />
          <ProjectsList projects={projectsData} />
        </Box>

      </Container>
    </Container>

  </>);
}

