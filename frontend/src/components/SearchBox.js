import React, { useState } from 'react';
import { 
  Paper, 
  InputBase, 
  IconButton, 
  Box 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBox = ({ onSearch, isLoading }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() && !isLoading) {
      onSearch(query);
    }
  };

  return (
    <Box sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <Paper
        component="form"
        onSubmit={handleSubmit}
        sx={{ p: '2px 4px', display: 'flex', alignItems: 'center' }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Ask your question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={isLoading}
        />
        <IconButton 
          type="submit" 
          disabled={isLoading}
          sx={{ p: '10px' }}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
    </Box>
  );
};

export default SearchBox; 