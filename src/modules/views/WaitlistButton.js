import * as React from 'react';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import Typography from '@mui/material/Typography';



function WaitlistButton() {
    const [email, setEmail] = React.useState("");
    const [sent, setSent] = React.useState(false);


    const RegisterWaitlist = (e) => {
        e.preventDefault();

        let url = 'https://api.sheety.co/2d1a9568a9af9f0c5b478fb1e08bbbb7/waitlistRegistry/responses';
        let body = {
          response: {
            email: email,
            timestamp: new Date(Date.now()).toString(),
            },
        }
        fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(body)
        })
        .then((response) => response.json())
        .then(json => {
          setSent(true);
          console.log(json.response);
        });
    }


    return (
        <React.Fragment>
            {sent ? 
                <Typography sx={{ color: 'white', px: 5 }}>Thank you for signing up!  You will be the first to know when our latest features are released!</Typography> :
            <Box
            component="form"
            onSubmit={RegisterWaitlist}
            noValidate
            fullWidth
            display="flex"
            sx={{
                mx: 'auto',
                mb: 5,
                width: '80vw',
                justifyContent: 'center',
            }}
            >
                <div>
                <Input
                id="waitlist-email"
                autoComplete="email"
                autoFocus
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                required
                sx={{
                    width: '300px',
                    height: 35,
                    pl: 2,
                    background: '#e6edf0',
                    borderRadius: {
                        xs: '10px 10px 10px 10px',
                        sm: '10px 0px 0px 10px',
                    },
                }}
                />
                <Button 
                variant="contained"
                color="secondary"
                type="submit"
                sx={{
                    width: '150px',
                    height: 35,
                    borderRadius: {
                        xs: '10px 10px 10px 10px',
                        sm: '0px 10px 10px 0px',
                    },
                }}
                >
                    Join Waitlist
                </Button>
                </div>
            </Box>
            }
        </React.Fragment>
    );
};

export default WaitlistButton;