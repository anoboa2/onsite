import * as React from 'react';
import Fade from 'react-reveal/Fade';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

// Convert to long form content -> Left, Right, Left layout

const item = {
  display: 'flex',
  flexDirection: {xs: 'column', md: 'row'},
  alignItems: 'center',
  py: 20,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'white' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={2}>
          <Fade bottom>
            <Grid item>
              <Box sx={item}>
                <Box 
                  component="img"
                  src="/img/iphone13-mockup1.png"
                  alt="iphone mockup of mobile app hotel page"
                  sx={{ pr: 10, mx: '5vw', height: 600 }}
                />
                <Box sx={{ width:'50%' }}>
                <Typography variant="h6" sx={{ my: 5 }}>
                  Local travel professionals
                </Typography>
                <Typography variant="h5">
                  {
                    'We connect you with local, knowledgeable travel experts from wherever you are looking to go and let them plan the prefect trip based on their personal experience and your occasion, time and preferences.'
                  }
                </Typography>
                </Box>
              </Box>
            </Grid>
          </Fade>
          <Fade bottom>
            <Grid item>
              <Box sx={item}>
                <Box sx={{ width:'50%' }}>
                <Typography variant="h6" sx={{ my: 5 }}>
                  From plan till you arrive home
                </Typography>
                <Typography variant="h5">
                  {
                    'We are there every step of the way. Your agent will provide an itinerary for your feedback, make any needed changes now or at any point in your journey, book every aspect of your trip and be there for any questions till you arrive home.'
                  }
                </Typography>
                </Box>
                <Box
                  component="img"
                  
                  src="/img/iphone12-mockup1.png"
                  alt="iphone mockup of mobile app booking page"
                  sx={{ pl: 10, height: 600 }}
                />
              </Box>
            </Grid>
          </Fade>
          <Fade bottom>
            <Grid item>
              <Box sx={item}>
                <Box
                  component="img"
                  src="/img/three-frame.png"
                  alt="iphone mockup of mobile app itinerary pages"
                  sx={{ pr: 10, height: 600 }}
                />
                <Box>
                <Typography variant="h6" sx={{ my: 5 }}>
                  Everything in one place
                </Typography>
                <Typography variant="h5">
                  {'Our app allows you and your companions to see your complete itinerary, day by day, including maps, tickets, images and reviews as well as chat with your agent any time you have a question or  need to make a change.'}
                </Typography>
                </Box>
              </Box>
            </Grid>
          </Fade>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
