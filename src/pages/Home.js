import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';
import { getUserProfile, getUserRepos } from '../components/Services';
import User from '../components/User';
import Repos from '../components/Repos';

const Home = () => {

    const [username, setUsername] = useState('');
    const [user, setUser] = useState(null);
    const [repos, setRepos] = useState([]);
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        try {
            const userProfile = await getUserProfile(username);
            const userRepos = await getUserRepos(username);
            setUser(userProfile);
            setRepos(userRepos);
            setError(null);
        } catch (error) {
            setError('User not found');
            setUser(null);
            setRepos([]);
        }
    };

    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
          <TextField
            label="GitHub Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Button variant="contained" onClick={handleSearch}>Search</Button>
    
          {error && <Typography color="error" mt={2}>{error}</Typography>}
          
          {user && <User user={user} />}
          {repos.length > 0 && <Repos repos={repos} />}
        </Box>
      );
};

export default Home;
