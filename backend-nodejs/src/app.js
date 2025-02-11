const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.post('/search', async (req, res) => {
    try {
        const { query } = req.body;
        
        // TODO: Implement search logic
        // 1. Generate embeddings for the query using OpenAI
        // 2. Search Pinecone for similar chunks
        // 3. Use OpenAI to generate a response based on the retrieved chunks
        
        // Placeholder response
        return res.json({
            answer: "This is a placeholder response. Implement actual search logic.",
            sources: ["Source 1", "Source 2"]
        });
    } catch (error) {
        console.error('Search error:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

module.exports = app; 