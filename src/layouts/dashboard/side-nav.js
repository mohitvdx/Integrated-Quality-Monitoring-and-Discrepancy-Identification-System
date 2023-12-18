import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';
import ArrowTopRightOnSquareIcon from '@heroicons/react/24/solid/ArrowTopRightOnSquareIcon';
import ChevronUpDownIcon from '@heroicons/react/24/solid/ChevronUpDownIcon';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Stack,
  SvgIcon,
  Typography,
  useMediaQuery
} from '@mui/material';
import { Logo } from 'src/components/logo';
import { Scrollbar } from 'src/components/scrollbar';
import { items } from './config';
import { SideNavItem } from './side-nav-item';
import React, { useState, useEffect } from 'react';

// function MyComponent() {
//   // Function to refresh the page, placed inside your component
  const refreshPage = () => {
    window.location.reload();
  };


export const SideNav = (props) => {
  const { open, onClose } = props;
  const pathname = usePathname();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));

  const content = (
    
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%'
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400'
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}
      >
        <Box sx={{ p: 3 }}>
          <Box
            component={NextLink}
            href="/"
            sx={{
              display: 'inline-flex',
              height: 32,
              width: 32
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              borderRadius: 1,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'space-between',
              mt: 2,
              p: '12px'
            }}
          >
            <div>
              <Typography
                color="inherit"
                variant="subtitle1"
              >
                IQMDIS
              </Typography>
              {/* <Typography
                color="neutral.400"
                variant="body2"
              >
                Production
              </Typography> */}
            </div>
            <SvgIcon
              fontSize="small"
              sx={{ color: 'neutral.500' }}
            >
              <ChevronUpDownIcon />
            </SvgIcon>
          </Box>
        </Box>
        <Divider sx={{ borderColor: 'neutral.700' }} />
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0
            }}
          >
            
            
            {items.map((item) => {
              const active = item.path ? (pathname === item.path) : false;

              

              
              return (
                <SideNavItem
                  active={active}
                  disabled={item.disabled}
                  external={item.external}
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              );
            })}
            </Stack>
          </Box>
          <Divider sx={{ borderColor: 'neutral.700' }} />
          <Box
            sx={{
            px: 2,
            py: 3
            }}
          >
            <Typography
            color="neutral.100"
            variant="subtitle2"
            >
            {/* <IconWithName name="Input QM Data" /> */}
            Input QM Data
            </Typography>

            <Box
            sx={{
              display: 'flex',
              mt: 0,
              mx: 'auto',
              width: '160px',
              '& img': {
              width: '100%'
              }
            }}
            >
            {/* <img
              alt=" Smart India Hackathon"
              src="/assets/IQMDIS-kit-pro.png"
            /> */}
            </Box>
                 
      <div>
      <Button
  component="a"
  fullWidth
  sx={{
    mt: 2,
    backgroundColor: '#6577B3', // Adjust the color to match your theme
    color: 'white', // Adjust the text color to match your theme
    textTransform: 'none', // Prevent uppercase transform
    justifyContent: 'flex-start', // Align text to the left
    '&:hover': {
      backgroundColor: 'darkblue' // Darken the button on hover
    }
  }}
  target="_blank"
  variant="contained"
>
  E-form Data
  <input 
    type="file" 
    id="data-source-c" 
    accept=".csv" 
    onChange={(e) => handleFileChange(e, 'sourceC')} 
    style={{ 
      opacity: 0, // Make the file input invisible
      position: 'absolute', // Take it out of flow
      width: '100%', // Expand to cover the button
      height: '100%' // Expand to cover the button
    }} 
  />
</Button>


          <Button
  component="a"
  fullWidth
  sx={{
    mt: 2,
    backgroundColor: '#6577B3', // Adjust the color to match your theme
    color: 'white', // Adjust the text color to match your theme
    textTransform: 'none', // Prevent uppercase transform
    justifyContent: 'flex-start', // Align text to the left
    '&:hover': {
      backgroundColor: 'darkblue' // Darken the button on hover
    }
  }}
  target="_blank"
  variant="contained"
>
  National QM Data 
  <input 
    type="file" 
    id="data-source-c" 
    accept=".csv" 
    onChange={(e) => handleFileChange(e, 'sourceC')} 
    style={{ 
      opacity: 0, // Make the file input invisible
      position: 'absolute', // Take it out of flow
      width: '100%', // Expand to cover the button
      height: '100%' // Expand to cover the button
    }} 
  />
</Button>


<Button
  component="a"
  fullWidth
  sx={{
    mt: 2,
    backgroundColor: '#6577B3', // Adjust the color to match your theme
    color: 'white', // Adjust the text color to match your theme
    textTransform: 'none', // Prevent uppercase transform
    justifyContent: 'flex-start', // Align text to the left
    '&:hover': {
      backgroundColor: 'darkblue' // Darken the button on hover
    }
  }}
  target="_blank"
  variant="contained"
>
  State QM Data
  <input 
    type="file" 
    id="data-source-c" 
    accept=".csv" 
    onChange={(e) => handleFileChange(e, 'sourceC')} 
    style={{ 
      opacity: 0, // Make the file input invisible
      position: 'absolute', // Take it out of flow
      width: '100%', // Expand to cover the button
      height: '100%' // Expand to cover the button
    }} 
  />
</Button>

      </div>
      
      {/* Refresh Button */}
      <button onClick={refreshPage}>Refresh</button>

          <Button
            component="a"
            endIcon={(
              <SvgIcon fontSize="small">
                <ArrowTopRightOnSquareIcon />
              </SvgIcon>
            )}
            fullWidth
            href="https://pmgsy.nic.in/quality-monitoring"
            sx={{ mt: 2 }}
            target="_blank"
            variant="contained"
          >
            OMMAS
          </Button>
        </Box>
      </Box>
    </Scrollbar>
  );

  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.800',
            color: 'common.white',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

SideNav.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
