import { Box, Tab } from '@mui/material';
import React, { useState } from 'react'
import { TabContext, TabList, TabPanel } from '@mui/lab';
import './Skills.scss'
import SoftSkills from './softSkills/SoftSkills';
import TechSkills from './techSkills/TechSkills';
import { useTranslation } from 'react-i18next'


const Skills = () => {
    const [value, setValue] = useState('1');
    const {t}=useTranslation()
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container-skills'>
            {/* <h2>HABILIDADES </h2> */}
            <Box sx={{ width: '100%', typography: 'body1', color: '#ffff' }}>
                <TabContext value={value}>
                    <TabList indicatorColor=""  textColor='inherit' centered onChange={handleChange} aria-label="lab API tabs example" variant='fullWidth'>
                        <Tab  sx={{ color: `${value==1?'#03DAC6':'#ffff'}`,fontSize:{xs:'large',sm:'x-large' }}} label={t('skills.tech-skills')} value="1" />
                        <Tab sx={{ color:  `${value==2?'#03DAC6':'#ffff'}`,fontSize:{xs:'large',sm:'x-large' }}} label={t('skills.soft-skills')} value="2" />

                    </TabList>

                    <TabPanel className='skill-panel' value="1">

                        <TechSkills />
                    </TabPanel>
                    <TabPanel className='skill-panel' value="2">
                        <SoftSkills />
                    </TabPanel>

                </TabContext>
            </Box>


        </div>
    )
}

export default Skills