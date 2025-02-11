import React from 'react';
import { 
  Paper, 
  Typography, 
  Box 
} from '@mui/material';

const ResultDisplay = ({ result }) => {
  if (!result) return null;

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', mt: 4 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="body1" component="div">
          {result.answer}
        </Typography>
        {result.sources && (
          <Box sx={{ mt: 2 }}>
            <Typography variant="caption" color="text.secondary">
              Sources:
            </Typography>
            <ul style={{ margin: 0 }}>
              {result.sources.map((source, index) => (
                <li key={index}>
                  <Typography variant="caption" color="text.secondary">
                    {source}
                  </Typography>
                </li>
              ))}
            </ul>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default ResultDisplay; 