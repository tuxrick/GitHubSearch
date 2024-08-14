import React from 'react';
import { List, ListItem, ListItemText, Typography } from '@mui/material';

const Repos = ({ repos}) => {
    return (
        <List>
          {repos && repos.length > 0 ? (
            repos.map((repo, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={repo.name}
                  secondary={repo.description}
                />
                <Typography variant="body2">Stars: {repo.stargazers_count}</Typography>
                <Typography variant="body2">Forks: {repo.forks_count}</Typography>
              </ListItem>
            ))
          ) : (
            <Typography variant="body2">No repositories found.</Typography>
          )}
        </List>
    );
};

export default Repos;
