import { Box, Paper, Tab, Tabs } from '@mui/material';
import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './Skills.scss'
import Skill from './skill/skill'
import SoftSkills from './SoftSkills';
import TechSkills from './techSkills/TechSkills';
import { display, flexbox } from '@mui/system';

const Skills = () => {
    const [value, setValue] = useState('1');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container-skills'>
            <h2>HABILIDADES </h2>
            <Box sx={{ width: '100%', typography: 'body1', color: '#ffff' }}>
                <TabContext value={value}>
                    <TabList centered onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth'>
                        <Tab sx={{ color: '#fff' }} label="Tecnicas" value="1" />
                        <Tab sx={{ color: '#fff' }} label="Blandas" value="2" />

                    </TabList>

                    <TabPanel value="1">

                        <TechSkills />
                    </TabPanel>
                    <TabPanel value="2">
                        <SoftSkills />
                    </TabPanel>

                </TabContext>
            </Box>


        </div>
    )
}

export default Skills