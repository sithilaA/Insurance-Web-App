import { useState } from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  Box,
  Button,
  Container,
  FormHelperText,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Paper,
  LinearProgress
} from '@mui/material';

import IconButton from '@mui/material/IconButton';
import EyeOutlined from '@ant-design/icons/EyeOutlined';
import EyeInvisibleOutlined from '@ant-design/icons/EyeInvisibleOutlined';
import { useNavigate , Link} from 'react-router-dom'; // ✅ Import
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';



import logo from '../../Assets/img/Logo.png'; // Adjust path if necessary

// Password strength checker
const getPasswordStrength = (password) => {
  let score = 0;
  if (!password) return { score, label: 'Too Short', color: 'error' };

  if (password.length >= 6) score++;
  if (password.length >= 8) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[@$!%*?&#]/.test(password)) score++;

  let label = 'Weak';
  let color = 'error';

  if (score >= 4) {
    label = 'Strong';
    color = 'success';
  } else if (score === 3) {
    label = 'Medium';
    color = 'warning';
  }

  return { score: (score / 5) * 100, label, color };
};

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    score: 0,
    label: '',
    color: 'error'
  });

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => event.preventDefault();

    const navigate = useNavigate(); // ✅ Initialize


  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Paper elevation={3} sx={{ p: 4, width: '100%' }}>
          <Box textAlign="center" mb={3}>
            <img src={logo} alt="Logo" width={80} />
            <Typography variant="h5" mt={2} fontWeight={600}>
              Create an Account
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Fill in your details below to register
            </Typography>
          </Box>

          <Formik
            initialValues={{
              firstname: '',
              lastname: '',
              email: '',
              password: '',
              confirmPassword: '',
                terms: true // ✅ Checkbox is checked by default

            }}
            validationSchema={Yup.object().shape({
              firstname: Yup.string().required('First Name is required'),
              lastname: Yup.string().required('Last Name is required'),
              email: Yup.string().email('Enter a valid email').required('Email is required'),
              password: Yup.string().min(6).required('Password is required'),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm your password'),
                terms: Yup.boolean()
  .oneOf([true], 'You must accept the terms and conditions')

            })}
              onSubmit={(values, { setSubmitting }) => {
        console.log('Form Values:', values);
        // ✅ Redirect to home
        navigate('/');
      }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, touched, errors }) => (
              <form noValidate onSubmit={handleSubmit}>
                <Stack spacing={2}>
                  <div>
                    <InputLabel>First Name</InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="firstname"
                      value={values.firstname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="John"
                      error={Boolean(touched.firstname && errors.firstname)}
                    />
                    {touched.firstname && errors.firstname && (
                      <FormHelperText error>{errors.firstname}</FormHelperText>
                    )}
                  </div>

                  <div>
                    <InputLabel>Last Name</InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="lastname"
                      value={values.lastname}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Doe"
                      error={Boolean(touched.lastname && errors.lastname)}
                    />
                    {touched.lastname && errors.lastname && (
                      <FormHelperText error>{errors.lastname}</FormHelperText>
                    )}
                  </div>

                  <div>
                    <InputLabel>Email</InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="email"
                      type="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="email@example.com"
                      error={Boolean(touched.email && errors.email)}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText error>{errors.email}</FormHelperText>
                    )}
                  </div>

                  <div>
                    <InputLabel>Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="password"
                      type={showPassword ? 'text' : 'password'}
                      value={values.password}
                      onChange={(e) => {
                        handleChange(e);
                        const strength = getPasswordStrength(e.target.value);
                        setPasswordStrength(strength);
                      }}
                      onBlur={handleBlur}
                      placeholder="******"
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            edge="end"
                          >
                            {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                          </IconButton>
                        </InputAdornment>
                      }
                      error={Boolean(touched.password && errors.password)}
                    />
                    {touched.password && errors.password && (
                      <FormHelperText error>{errors.password}</FormHelperText>
                    )}

                    {/* Password Strength Meter */}
                    {values.password && (
                      <Box mt={1}>
                        <LinearProgress
                          variant="determinate"
                          value={passwordStrength.score}
                          color={passwordStrength.color}
                          sx={{ height: 8, borderRadius: 5 }}
                        />
                        <Typography
                          variant="caption"
                          color={`${passwordStrength.color}.main`}
                          fontWeight={500}
                        >
                          {passwordStrength.label}
                        </Typography>
                      </Box>
                    )}
                  </div>

                  <div>
                    <InputLabel>Confirm Password</InputLabel>
                    <OutlinedInput
                      fullWidth
                      name="confirmPassword"
                      type={showPassword ? 'text' : 'password'}
                      value={values.confirmPassword}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="******"
                      error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                    />
                    {touched.confirmPassword && errors.confirmPassword && (
                      <FormHelperText error>{errors.confirmPassword}</FormHelperText>
                    )}
                  </div>

                  <div>
    <FormControlLabel
  control={
    <Checkbox
      name="terms"
      color="primary"
      checked={values.terms}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  }
  label={
    <Typography variant="body2">
      I agree to the{' '}
      <Link to="/terms" style={{ color: '#1976d2', textDecoration: 'underline' }}>
        Terms & Conditions
      </Link>
    </Typography>
  }
/>
{touched.terms && errors.terms && (
  <FormHelperText error>{errors.terms}</FormHelperText>
)}



                  </div>

                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    sx={{ mt: 1, py: 1.5, fontWeight: 600 }}
                  >
                    Register
                  </Button>
                  <Typography variant="body2" textAlign="center">
              Already have an account?{' '}
              <Link to="/login" style={{ color: '#1976d2', textDecoration: 'none', fontWeight: 500 }}>
                Login
              </Link>
            </Typography>

                </Stack>
              </form>
            )}
          </Formik>
        </Paper>
      </Box>
    </Container>
  );
}
