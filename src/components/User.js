import React from 'react';
import { Card, CardContent, Typography, Avatar, Box } from '@mui/material';

const User = ({ user }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar src={user.avatar_url} alt={user.login} sx={{ width: 100, height: 100 }} />
          <Typography variant="h5">{user.name || user.login}</Typography>
          <Typography variant="body2" color="textSecondary">{user.bio}</Typography>
        </Box>
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2">Repos: {user.public_repos}</Typography>
          <Typography variant="body2">Followers: {user.followers}</Typography>
          <Typography variant="body2">Following: {user.following}</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default User;
