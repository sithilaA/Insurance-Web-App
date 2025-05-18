import React, { useEffect, useRef, useState } from 'react';
import { Box, Typography, Button, Container, CircularProgress } from '@mui/material';
import Persona from 'persona';

const Verification = () => {
  const embeddedClientRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [isCompleted, setIsCompleted] = useState(false);


  useEffect(() => {
    const client = new Persona.Client({
      templateId: "itmpl_xQyvUgW3we5oj8ASNE1gXwj5gCYU", // Replace with production templateId
      environmentId: "env_1ygTvMPiQKzcYNQGNi5YuFephsvm",
      onReady: () => {
        setLoading(false);
        client.open();
      },
      onLoad: (error) => {
        if (error) {
          console.error(`Failed with code: ${error.code}, message: ${error.message}`);
        }
      },
      onStart: (inquiryId) => {
        console.log(`Started inquiry ${inquiryId}`);
      },
      onComplete: (inquiryId) => {
  console.log(`Inquiry ${inquiryId} completed`);
  fetch(`/server-handler?inquiry-id=${inquiryId}`);
  setIsCompleted(true); // ✅ Show message after completion
    client.exit(); // ✅ Close the modal
    window.exit(true)
},
      onEvent: (name, meta) => {
        console.log(`Persona Event: ${name}`, meta);
      },
    });

    embeddedClientRef.current = client;

    // Optional: expose exit to window for debugging
    window.exit = (force) => client ? client.exit(force) : alert("Client not initialized");

    return () => {
      // Clean up if needed
    };
  }, []);

  return (
    <Container maxWidth="sm" sx={{ mt: 10, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Identity Verification
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ mb: 4 }}>
        Please verify your identity to continue.
      </Typography>

  {loading ? (
  <CircularProgress />
) : isCompleted ? (
  <Typography variant="body2" color="primary" fontWeight={500}>
    Your submission is waiting for approval.
  </Typography>
) : (
  <Typography variant="body2" color="success.main">
    Verification window opened.
  </Typography>
)}


      <Box sx={{ mt: 4 }}>
        <Button variant="outlined" color="error" onClick={() => window.exit(true)}>
          Cancel Verification
        </Button>
      </Box>
    </Container>
  );
};

export default Verification;
