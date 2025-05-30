import React, { useState } from 'react';
import {
  Container,
  Grid,
  Paper,
  Typography,
  TextField,
  MenuItem,
  Button,
  Box,
  Alert,
  FormControl,
  InputLabel,
  Select as MuiSelect,
  CircularProgress,
} from '@mui/material';

const plans = [
  {
    name: 'Basic Plan',
    value: 'basic',
    price: '$99/year',
    features: [
      'Accidental coverage up to $10,000',
      'Hospital cash benefit',
      '24/7 Customer support'
    ]
  },
  {
    name: 'Premium Plan',
    value: 'premium',
    price: '$199/year',
    features: [
      'Accidental coverage up to $50,000',
      'Hospital cash benefit + daily allowance',
      'Wellness benefits and discounts',
      'Priority 24/7 Customer support'
    ]
  },
  {
    name: 'Elite Plan',
    value: 'elite',
    price: '$299/year',
    features: [
      'Accidental coverage up to $100,000',
      'Comprehensive family cover',
      'International travel insurance',
      'Annual health checkup',
      'VIP 24/7 concierge support'
    ]
  }
];

const PurchaseForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    address: '',
    plan: '',
    startDate: '',
    duration: '',
    paymentMethod: 'card'
  });

  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      console.log('Form data:', formData);
      setTimeout(() => {
        setLoading(false);
        setSubmitted(true);
        console.log('Confirmation email sent & policy document issued.');
      }, 1000);
    } catch (err) {
      setLoading(false);
      setError('An error occurred while processing your request.');
    }
  };

  const handlePlanSelect = (value) => {
    setFormData((prev) => ({ ...prev, plan: value }));
    setStep(2);
  };

  return (
    <Container sx={{ mt: 8 }}>
      <Paper elevation={4} sx={{ p: 4, borderRadius: 3 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Purchase Insurance Plan
        </Typography>

        {step === 1 && (
          <Grid container spacing={3} mb={4}>
            {plans.map((plan) => (
              <Grid item xs={12} md={4} key={plan.value}>
                <Paper elevation={2} sx={{ p: 2, borderRadius: 2, height: '100%' }}>
                  <Typography variant="h6" color="primary" gutterBottom>
                    {plan.name}
                  </Typography>
                  <Typography variant="subtitle1" gutterBottom>
                    {plan.price}
                  </Typography>
                  <ul style={{ paddingLeft: '20px' }}>
                    {plan.features.map((feature, idx) => (
                      <li key={idx}><Typography variant="body2">{feature}</Typography></li>
                    ))}
                  </ul>
                  <Button fullWidth variant="contained" sx={{ mt: 2 }} onClick={() => handlePlanSelect(plan.value)}>
                    Choose Plan
                  </Button>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}

        {step === 2 && (submitted ? (
          <Alert severity="success">🎉 Purchase successful! Confirmation email has been sent.</Alert>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              {/* Personal Info */}
              <Grid item xs={12} md={6}><TextField name="fullName" label="Full Name" fullWidth onChange={handleChange} required /></Grid>
              <Grid item xs={12} md={6}><TextField name="email" label="Email Address" fullWidth onChange={handleChange} required /></Grid>
              <Grid item xs={12} md={6}><TextField name="phone" label="Phone Number" fullWidth onChange={handleChange} required /></Grid>
              <Grid item xs={12} md={6}><TextField name="dob" label="Date of Birth" type="date" fullWidth InputLabelProps={{ shrink: true }} onChange={handleChange} /></Grid>
              <Grid item xs={12}><TextField name="address" label="Address" fullWidth multiline rows={3} onChange={handleChange} required /></Grid>

              {/* Plan Info */}
              <Grid item xs={12} md={6}>
                <TextField name="selectedPlan" label="Selected Plan" value={formData.plan} fullWidth disabled />
              </Grid>
              <Grid item xs={12} md={6}><TextField name="startDate" label="Start Date" type="date" fullWidth InputLabelProps={{ shrink: true }} onChange={handleChange} required /></Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth required>
                  <InputLabel>Duration</InputLabel>
                  <MuiSelect name="duration" value={formData.duration} label="Duration" onChange={handleChange}>
                    <MenuItem value="6months">6 Months</MenuItem>
                    <MenuItem value="1year">1 Year</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                  <InputLabel>Payment Method</InputLabel>
                  <MuiSelect name="paymentMethod" value={formData.paymentMethod} label="Payment Method" onChange={handleChange}>
                    <MenuItem value="card">Credit/Debit Card</MenuItem>
                    <MenuItem value="paypal">PayPal</MenuItem>
                    <MenuItem value="bank">Bank Transfer</MenuItem>
                  </MuiSelect>
                </FormControl>
              </Grid>

              {formData.paymentMethod === 'bank' && (
                <Grid item xs={12}>
                  <Typography variant="body2" color="text.secondary">
                    📧 Bank transfer instructions will be emailed after submission.
                  </Typography>
                </Grid>
              )}

              {error && (
                <Grid item xs={12}>
                  <Alert severity="error">{error}</Alert>
                </Grid>
              )}

              <Grid item xs={12}>
                <Box sx={{ position: 'relative' }}>
                  <Button
                    variant="contained"
                    type="submit"
                    fullWidth
                    size="large"
                    disabled={loading}
                    sx={{ mt: 2, borderRadius: 2 }}
                  >
                    Submit Purchase
                  </Button>
                  {loading && (
                    <CircularProgress
                      size={24}
                      sx={{
                        color: 'primary.main',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginTop: '-12px',
                        marginLeft: '-12px',
                      }}
                    />
                  )}
                </Box>
              </Grid>
            </Grid>
          </form>
        ))}
      </Paper>
    </Container>
  );
};

export default PurchaseForm;
