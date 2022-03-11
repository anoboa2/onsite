import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';
import WaitlistButton from './WaitlistButton';
import BookingForm from '../form/BookingForm';
import Button from '../components/Button';
import { useRownd } from '@rownd/react';
import SignupModal from './SignupModal';

const backgroundImage =
  '/img/miami-palms.jpg';

export default function ProductHero() {
  const { is_authenticated } = useRownd();

  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'bottom',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={backgroundImage}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center" sx={{mt: 5}}>
      Travel booking, reinvented
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        Get the most out of your travel by leaving the planning to us
      </Typography>
      {/* {is_authenticated ? ( */}
        <SignupModal />
        <BookingForm />
      {/* ) : (
        <Button data-rph-login-btn variant="contained" color="secondary">Sign Up</Button>
      )} */}
      
    </ProductHeroLayout>
  );
}
