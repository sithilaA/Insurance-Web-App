import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography
} from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

// Sample initial user data (you can replace this with data from props or context)
const initialUserData = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  phone: '',
  bio: ''
};

// Validation schema
const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().matches(/^[0-9]*$/, 'Only digits allowed'),
  bio: Yup.string().max(250, 'Maximum 250 characters')
});

const EditProfile = () => {
  const handleSubmit = (values) => {
    console.log('Updated profile:', values);
    // You can add API call here
    alert('Profile updated successfully!');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Edit Profile
        </Typography>

        <Formik
          initialValues={initialUserData}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit
          }) => (
            <Form onSubmit={handleSubmit}>
              <Stack spacing={2}>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  value={values.firstName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.firstName && errors.firstName)}
                  helperText={touched.firstName && errors.firstName}
                />
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  value={values.lastName}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.lastName && errors.lastName)}
                  helperText={touched.lastName && errors.lastName}
                />
                <TextField
                  label="Email"
                  name="email"
                  fullWidth
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.email && errors.email)}
                  helperText={touched.email && errors.email}
                />
                <TextField
                  label="Phone Number"
                  name="phone"
                  fullWidth
                  value={values.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.phone && errors.phone)}
                  helperText={touched.phone && errors.phone}
                />
                <TextField
                  label="Bio"
                  name="bio"
                  fullWidth
                  multiline
                  rows={4}
                  value={values.bio}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={Boolean(touched.bio && errors.bio)}
                  helperText={touched.bio && errors.bio}
                />

                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2, py: 1.5, fontWeight: 600 }}
                >
                  Save Changes
                </Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Paper>
    </Container>
  );
};

export default EditProfile;
