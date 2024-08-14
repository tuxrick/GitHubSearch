import React from 'react';
import { TextField, Button, Box } from '@mui/material';


const Home = () => {


  return (
    <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
      <TextField
        label="Type the user to search"
        value={""}
        variant="outlined"
        sx={{ mb: 2 }}
      />
      <Button variant="contained">Search</Button>
      
    </Box>
  );
};

export default Home;
