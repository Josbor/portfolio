import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next'

export default function HeaderBar() {
  const [open, setOpen] = useState(false)
  const {t}=useTranslation();
  const [hMenu, setHMenu] = useState(t('header.nav-home'))
  const toggleDrawer = () => {
    setOpen(!open)
    console.log('se acciono')
  }


  useEffect(() => {

    const header = document.querySelector('#nav').getBoundingClientRect().y
    const navs = document.querySelectorAll('.nav-tab')
    const inicio = document.querySelector('#header').getBoundingClientRect().y
    const about = document.querySelector('#tab-sobre-mi').getBoundingClientRect().y
    const portfolio = document.querySelector('#tab-portafolio').getBoundingClientRect().y
    const skills = document.querySelector('#tab-habilidades').getBoundingClientRect().y
    const handleScroll = () => {
      //position from each section


      const removeClass = () => {
        navs.forEach(n => {
          n.classList.remove('nav--selected')
        })
      }
      //position of the windows
      const p = window.scrollY;


      if (p > inicio) {

        setHMenu(t('header.nav-home'))

      }
      if (p > (about * 0.9)) {

        setHMenu(t('header.nav-about'))

      }
      if (p > (portfolio * 0.9)) {

        setHMenu(t('header.nav-portfolio'))

      }
      if (p > (skills * 0.9)) {

        setHMenu(t('header.nav-skills'))
      }



    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)

    }
  }, [])


  return (
    <>
      <Box sx={{ flexGrow: 1, display: { md: 'none' } }}>
        <AppBar position="fixed" sx={{ background: '#1E1F26 ', color: '#03DAC6' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" width={'100%'} align='center' sx={{textTransform:'uppercase'}} >
              {hMenu}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          anchor='left'
          open={open}
          onClose={toggleDrawer}
          PaperProps={{
            sx: {
              background: '#1E1F26',
              justifyContent: 'center'

            }
          }}
        >
          <Box
            sx={{
              width: 250,
              height: '70%',
              display: 'flex',
              flexDirection: 'column',
              textTransform:'uppercase'

            }}
          >


            <a className="nav-tab" href="#header" onClick={toggleDrawer}>{t('header.nav-home')}</a>
            <a className="nav-tab" href="#tab-sobre-mi" onClick={toggleDrawer}>{t('header.nav-about')}</a>
            <a className="nav-tab" href="#tab-portafolio" onClick={toggleDrawer}>{t('header.nav-portfolio')}</a>
            <a className="nav-tab" href="#tab-habilidades" onClick={toggleDrawer}>{t('header.nav-skills')}</a>

          </Box>




        </Drawer>



      </Box>

      |
    </>
  );
}