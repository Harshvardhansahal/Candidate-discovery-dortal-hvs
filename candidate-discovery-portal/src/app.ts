import express from 'express';
import { mockCandidates, mockJobs } from '../lib/mock-data';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/candidates', (req, res) => {
  res.json(mockCandidates);
});

app.get('/jobs', (req, res) => {
  res.json(mockJobs);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});