import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import { Container, Box, InputLabel, Select, MenuItem, FormControlLabel, FormGroup, Checkbox, FormControl, Rating } from '@mui/material';
import Typography from '../components/Typography';
import TextField from '../components/TextField';
import Avatar from '../components/Avatar';
import { useRownd } from '@rownd/react';
import Button from '../components/Button';
import MuiPhoneNumber from 'material-ui-phone-number';

const flightOptions = [
    'Economy',
    'Premium Economy',
    'Business',
    'First',
]

const seatingOptions = [
    'Window',
    'Middle',
    'Aisle',
]

const bedOptions = [
    'King Bed',
    'Queen Bed',
    'Double Bed',
    'Suite',
]

const roomOptions = [
    'Balcony with a view',
    'Balcony, but view is not a priority',
    'No balcony, but view is a priority',
]

const dietaryOptions = [
    'Vegetarian',
    'Vegan',
    'Kosher',
    'Halal',
    'Gluten-Free',
    'None',
    'Open to all cuisines',
    'Other',
]

const containerStyle = {
    my: 4,
    p: 10,
    background: 'white',
    borderRadius: 2,
    boxShadow: 2,
}

const cardStyle = {
    width: '20%',
    maxWidth: 300,
    height: '30%',
    maxHeight: 400,
    background: 'white',
    
}

function TravelProfile() {
    const { is_initializing, user } = useRownd();

    const initialValues = {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        domestic_flight: [],
        int_flight: [],
        primary_airport: "",
        seating: [],
        lodging_rating: 0,
        bed: [],
        room_amenities: [],
        dietary: [],
    }

    const [values, setValues] = useState(initialValues)
    const [hasLoadedUserData, setHasLoadedUserData] = useState(false);

    useEffect(() => {
        if (!is_initializing && !hasLoadedUserData) {
            setValues({
                ...values,
                ...user.data,
            })
            setHasLoadedUserData(true);
        }
    }, [hasLoadedUserData, is_initializing, user.data, values])

    function handleChange(name, value, list=false) {
        console.log(value);
        if (list) {
            if (value) {
                const copyOflist = values[name];
                copyOflist.push(value);
                setValues({
                    ...values,
                    [name]: copyOflist,
                })
            } else {
                const copyOflist = values[name];
                const index = copyOflist.indexOf(value);
                copyOflist.splice(index, 1);
                setValues({
                    ...values,
                    [name]: copyOflist,
                })
            }
        } else {
            setValues({
                ...values,
                [name]: value,
            });
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        if (is_initializing) return;

        window.rownd.user.set(values);
    }

    return(
        <Section>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ width: '80%', mx: 'auto', }}
            >
                <Container component="section" sx={{ mt: 15, mb: 4, justifyContent: 'center' }}>
                    <Box sx={{ my: 15, p: 10, width: '100%', height: '30%', position: 'relative', background: 'white', borderRadius: 2, boxShadow: 2, }}>
                        {/* NEED TO TERNARY OPERATOR FOR IF NAMES ARE BLANK */}
                        {/* <Avatar name={values.first_name} /> */}
                        <InputLabel id="profile-first-name-label">First Name</InputLabel>
                        <TextField
                            id="profile-first-name-input"
                            variant="filled"
                            value={values.first_name}
                            onChange={(e) => handleChange('first_name', e.target.value)}
                            sx={{ minWidth: '300px' }}
                        />
                        <InputLabel id="profile-last-name-label">Last Name</InputLabel>
                        <TextField
                            id="profile-last-name-input"
                            variant="filled"
                            value={values.last_name}
                            onChange={(e) => handleChange('last_name', e.target.value)}
                            sx={{ minWidth: '300px' }}
                        />
                        <InputLabel id="profile-email-label">Email</InputLabel>
                        <TextField
                            id="profile-email-input"
                            variant="filled"
                            value={values.email}
                            onChange={(e) => handleChange('email', e.target.value)}
                            sx={{ minWidth: '300px'}}
                        />
                        <MuiPhoneNumber
                            id="profile-phone-number-input"
                            variant="filled"
                            value={values.phone_number}
                            defaultCountry={'us'}
                            autoFormat={false}
                            onChange={(e) => handleChange('phone_number', e)}
                        />
                    </Box>
                    <Container sx={containerStyle}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Transportation
                        </Typography>
                        <Box>
                            <InputLabel id="profile-domestic-flight-label">How do you typically like to fly domestically?</InputLabel>
                            <Select
                                id="profile-domestic-flight-input"
                                value={values.domestic_flight}
                                onChange={(e) => handleChange("domestic_flight", e.target.value)}
                                sx={{ minWidth: '300px'}}
                            >
                                {flightOptions.map((option) => {
                                    return (
                                        <MenuItem
                                            key={option}
                                            value={option}
                                            onChange={(e) => handleChange('domestic_flight', e.target.value)}
                                        >
                                            {option}
                                        </MenuItem>
                                    )
                                })}
                            </Select>
                        </Box>
                        <InputLabel id="profile-int-flight-label">How do you typically like to fly internationally?</InputLabel>
                        <Select
                            id="profile-int-flight-input"
                            value={values.int_flight}
                            onChange={(e) => handleChange('int_flight', e.target.value)}
                            sx={{ minWidth: '300px'}}
                        >
                            {flightOptions.map((option) => {
                                return (
                                    <MenuItem
                                        key={option}
                                        value={option}
                                        onChange={(e) => handleChange('domestic_flight', e.target.value)}
                                    >
                                        {option}
                                    </MenuItem>
                                )
                            })}
                        </Select>
                        <InputLabel id="profile-primary-airport-label">Please enter your preferred Airport for Departure</InputLabel>
                        <TextField
                            id="profile-primary-airport-input"
                            value={values.primary_airport}
                            onChange={(e) => handleChange('primary_airport', e.target.value)}
                            />
                        {/* Add code for Airport Selector */}
                        <InputLabel id="profile-seating-label">Please select your preferred flight seating</InputLabel>
                        <FormGroup
                            id="profile-seating-select"
                            value={values.seating}
                        >
                            {seatingOptions.map((option) => {
                                return (
                                    <FormControlLabel 
                                        key={option}
                                        onChange={(e) => handleChange('seating', option, true)}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.seating.includes(option)}
                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>
                                )
                            })}
                        </FormGroup>
                    </Container>
                    <Container sx={containerStyle}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Lodging
                        </Typography>
                        <InputLabel id="profile-lodging-label">Please select your lodging rating preference</InputLabel>
                        <Rating
                            id="profile-lodging-rating"
                            value={values.lodging_rating}
                            onChange={(e) => handleChange('lodging_rating', Number(e.target.value))}
                        />
                        <InputLabel id="profile-bed-label">Select your bed preference</InputLabel>
                        <FormGroup
                            id="profile-bed-select"
                            value={values.bed}
                        >
                            {bedOptions.map((option) => {
                                return (
                                    <FormControlLabel 
                                        key={option}
                                        onChange={(e) => handleChange('bed', e.target.value, true)}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.bed.includes(option)}
                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>
                                )
                            })}
                        </FormGroup>
                        <InputLabel id="profile-room-amenities-label">Select your preferred room features</InputLabel>
                        <FormGroup
                            id="profile-room-amenities-select"
                            value={values.room_amenities}
                        >
                            {roomOptions.map((option) => {
                                return (
                                    <FormControlLabel 
                                        key={option}
                                        onChange={(e) => handleChange('room_amenities', e.target.value, true)}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.room_amenities.includes(option)}
                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>
                                )
                            })}
                        </FormGroup>
                    </Container>
                    <Container sx={containerStyle}>
                        <Typography
                            variant="h4"
                            marked="center"
                            align="center"
                            component="h2"
                            sx={{ mb: 10, }}
                        >
                            Dining
                        </Typography>
                        <InputLabel id="profile-dietary-label">Do you have any food preference or dietary restrictions?</InputLabel>
                        <FormGroup id="profile-dietary-select"
                            value={values.dietary}
                            onChange={(e) => handleChange('dietary', e.target.value, true)}
                        >
                            {dietaryOptions.map((option) => {
                                return (
                                    <FormControlLabel 
                                        key={option}
                                        control={
                                            <Checkbox
                                                value={option}
                                                checked={values.dietary.includes(option)}
                                            />
                                        }
                                        label={option}>{option}
                                    </FormControlLabel>
                                )
                            })}
                        </FormGroup>
                    </Container>
                </Container>
                <Button id="profile-save-button" variant="contained" color="secondary" type="submit" sx={{width: 200, ml: '40%'}}>Save</Button>
            </Box>
        </Section>
    )
}

 export default TravelProfile;