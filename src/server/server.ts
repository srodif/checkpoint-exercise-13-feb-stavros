import express from 'express';
import cors from "cors";
import { getAll, create, updateById, deleteById } from './controller.js';

const app = express();
const port = 3001;


app.use(cors());
app.use(express.json());

app.get('/api/posts', getAll)
app.post('/api/posts', create)
app.put('/api/posts/:id', updateById)
app.delete('/api/posts/:id', deleteById)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})