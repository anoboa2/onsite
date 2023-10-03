import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import SpecialistAvatar from '../molecules/SpecialistAvatar';

const Advisors = [
  {
    firstName: 'Izanna',
    lastName: 'Levintova',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/izanna.lev/profile.jpeg',
    id: 'izanna.lev'
  },
  {
    firstName: 'Alyssa',
    lastName: 'Chlebek',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/alyssaandthecity/profile.jpeg',
    id: 'alyssaandthecity'
  },
  {
    firstName: 'Mustafa',
    lastName: 'Ansari',
    title: "Specialist",
    image: 'https://onsite-images-1xo7eac.s3.amazonaws.com/profile/mustafa23ansari/profile.jpeg',
    id: 'mustafa23ansari'
  }
]

const PopularAdvisors = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" color="primary.contrastText">Our Popular Specialists</Typography>
      <Grid container spacing={3}>
        {Advisors.map(({ firstName, lastName, title, image, id }) => (
          <Grid key={id} xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignContent: 'center' }}>
            <SpecialistAvatar specialist={{ firstName, lastName, title, image, id }} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default PopularAdvisors;