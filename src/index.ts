import express, { Request, Response} from 'express';

const app = express();
const PORT = 8000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Welcome to the TypeScript Express Server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});