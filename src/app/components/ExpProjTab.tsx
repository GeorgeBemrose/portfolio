import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import ExperienceTimeline from './ExperienceTimeline';


import work_experience_data from '../data/work_experience.json'

import educationData from '../data/education.json'


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function ExpProjTab() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box className="w-full md:w-2/3 p-3">
      <Box className="flex justify-center">
        <Tabs value={value} onChange={handleChange} aria-label="Tabs of experience, projects and education">
          <Tab label="Experience" {...a11yProps(0)} className='text-white'/>
          <Tab label="Education" {...a11yProps(1)} className='text-white'/>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
      <ExperienceTimeline data={work_experience_data} />
      </CustomTabPanel>
 
      <CustomTabPanel value={value} index={1}>
      <ExperienceTimeline data={educationData} />
      </CustomTabPanel>
     
    </Box>
  );
}
