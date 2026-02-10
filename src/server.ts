import express from 'express';
import { Response, Request } from 'express'

const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
    res.send(`Olá mundo`);
});

app.listen(PORT, () => console.log(`Server is runnig in http://localhost:${PORT}`));

