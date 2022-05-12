import { Button, Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import React from 'react';
import { Fade } from 'react-reveal';
import Typography from '../../../modules/components/Typography';
import './BookNow.css';

const useStyles = makeStyles((theme) => ({
    item: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down("sm")]: {
        }
    },
    typographyone: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "20px !important",
            whiteSpace: "break-spaces"
        }
    },
    typographytwo: {
        [theme.breakpoints.down("sm")]: {
            fontSize: "15px !important",
        }
    },
}))


const BookEmail = () => {
    const classes = useStyles()
    return (
        <Fade bottom>

            <Grid className={classes.item}>
                <div className="book-image">

                    <Box className="book-text">
                        <Typography className={classes.typographyone} marginBottom="40px" variant="h4">
                            Not Ready to Book Yet? We’ll keep you informed with all our latest travel updates
                        </Typography >
                        {/* <Typography className={classes.typographytwo} marginBottom="40px" variant="h5">
                            Your next trip to NYC or Miami is a few clicks away
                        </Typography> */}
                        <Button href="/SignupModalNewsletter"
                            variant="contained" style={{
                                backgroundColor: "#00aaca", padding: "10px 55px",
                                borderRadius: "30px",
                                color: "white",
                                fontSize: "15px"
                            }}>Suscribe</Button>
                    </Box>

                </div>
            </Grid>
        </Fade>

    );
}

export default BookEmail;
