import React, { useState } from 'react';
import {
  Box,
  Typography,
  Container,
  Avatar,
  TextField,
  Button,
  Stack,
  Divider,
  Paper
} from '@mui/material';

export default function ProfilePage() {
  const [user, setUser] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com'
  });

  const [editing, setEditing] = useState(false);
  const [formValues, setFormValues] = useState(user);

  const handleEditToggle = () => {
    setEditing(!editing);
    setFormValues(user); // reset changes if cancel
  };

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUser(formValues);
    setEditing(false);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 3 }}>
        <Stack spacing={3} alignItems="center">
          <Avatar sx={{ width: 80, height: 80 }}>JD</Avatar>

          <Typography variant="h5" fontWeight={600}>
            {user.firstName} {user.lastName}
          </Typography>

          <Divider flexItem />

          <Stack spacing={2} sx={{ width: '100%' }}>
            <TextField
              label="First Name"
              name="firstName"
              value={formValues.firstName}
              onChange={handleChange}
              fullWidth
              disabled={!editing}
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formValues.lastName}
              onChange={handleChange}
              fullWidth
              disabled={!editing}
            />
            <TextField
              label="Email"
              name="email"
              value={formValues.email}
              onChange={handleChange}
              fullWidth
              disabled={!editing}
            />
          </Stack>

          <Box sx={{ display: 'flex', gap: 2, mt: 2 }}>
            {editing ? (
              <>
                <Button variant="contained" onClick={handleSave}>
                  Save
                </Button>
                <Button variant="outlined" color="secondary" onClick={handleEditToggle}>
                  Cancel
                </Button>
              </>
            ) : (
              <Button variant="outlined" onClick={handleEditToggle}>
                Edit Profile
              </Button>
            )}
          </Box>
        </Stack>
      </Paper>
    </Container>
  );
}
