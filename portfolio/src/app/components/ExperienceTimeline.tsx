import React from 'react';
import {
  Typography,
  Box,
} from '@mui/material';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineOppositeContent,
    TimelineDot,
  } from '@mui/lab';

import Image from 'next/image';

  
import { Work, School, Code } from '@mui/icons-material';

interface TimelineEntryProps {
    start: string;
    end?: string; // optional (can be undefined for 'Present')
    organization: string;
    logo?: string;
    role: string;
    description: string;
    type: 'work' | 'education' | 'project'; // can be one of these three
  }
  

// Reusable TimelineEntry component
const TimelineEntry: React.FC<TimelineEntryProps> = ({
  start,
  end = 'Present',
  organization,
  logo,
  role,
  description,
  type
}) => {
  // Select the appropriate icon based on the type of entry
  const getIcon = () => {
    switch (type) {
      case 'education':
        return <School />;
      case 'project':
        return <Code />;
      default:
        return <Work />;
    }
  };

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body1" className='text-secondary'>
          {start} - {end || 'Present'}
        </Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot>{getIcon()}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Box className="flex items-end  flex-col mb-2">
            
          <Typography variant="h6" component="span" className='text-white'>
            {role} {organization && '@'}
          </Typography>
          
          {logo ? (
                <Image src={logo} alt='Headshot'
                width={50}
                height={50}
                className="rounded-lg"
                priority
                
              />
            ): <Typography variant="body1" className='text-white'>
            {organization}
          </Typography>}
          <Typography variant="body2" className='text-white'>
            {description}
        </Typography>
        
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
};

// Main Timeline component that accepts data as props
const ExperienceTimeline = ({ data }) => {
  return (
    <Timeline position="left">
      {data.map((entry, index) => (
        <TimelineEntry key={index} {...entry} />
      ))}
    </Timeline>
  );
};

export default ExperienceTimeline;