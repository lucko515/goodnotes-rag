import React, { useState } from 'react';
import { Container, Typography, CssBaseline, ThemeProvider, createTheme } from '@mui/material';
import SearchBox from './components/SearchBox';
import ResultDisplay from './components/ResultDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import { searchAPI } from './services/api';

const theme = createTheme();

function App() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (query) => {
    setLoading(true);
    setError(null);
    try {
      const response = await searchAPI(query);
      setResult(response);
    } catch (err) {
      setError(err.message);
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Typography 
          variant="h3" 
          component="h1" 
          align="center" 
          sx={{ mt: 4, mb: 2 }}
        >
          Q&A System
        </Typography>
        
        <SearchBox onSearch={handleSearch} isLoading={loading} />
        
        {loading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        {result && <ResultDisplay result={result} />}
      </Container>
    </ThemeProvider>
  );
}

export default App; 