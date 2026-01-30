import express, { Request, Response} from 'express';
import subjectsRouter from "./routes/subjects";
import cors from "cors";

const app = express();
const PORT = 8000;

const frontendUrl = process.env.FRONTEND_URL;

if (!frontendUrl) {
  throw new Error("FRONTEND_URL is required");
}

app.use(cors({
  origin: frontendUrl,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

// Middleware to parse incoming JSON requests
app.use(express.json());

app.use('/api/subjects', subjectsRouter);

// Root GET route
app.get('/', (req: Request, res: Response) => {
  res.status(200).send("Welcome to the TypeScript Express Server!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`⚡️ Server is running at http://localhost:${PORT}`);
});