import express from "express";
import cors from "cors";
import { Response, Request } from "express";

const app = express();
app.use(express.json());
app.use(cors);

const PORT = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send(`Olá mundo`);
});

app.listen(PORT, () =>
  console.log(`Server is runnig in http://localhost:${PORT}`),
);
